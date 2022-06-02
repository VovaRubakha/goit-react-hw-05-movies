import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getMovieCast } from 'shared/services/api';
import styles from './cast.module.css'

function Cast() {
    const [cast, setCast] = useState({
        items: [],
        loading: false,
        error: null,

    });
    const { id } = useParams();
    console.log(getMovieCast(id));
    useEffect(() => {
        const fetchMovies = async () => {
            setCast(prevState => ({ ...prevState, loading: true }));
            const {cast} = await getMovieCast(id);

            try {
                setCast(prevState => ({
                    ...prevState,
                    items: cast,
                    loading: false,
                }))
            } catch (error) {
                setCast(prevState => ({
                    ...prevState,
                    error: error.message,
                    loading: true,
                }))
            }
        }
        fetchMovies()
    }, [id]);
    
    const { items, loading, error } = cast;
    const isItems = Boolean(Object.values(items).length);
    console.log(items);
    const elements = items.map(item => {
        return(
            <li key={item.id }className={styles.castItem}>
                <img
                    src={item.profile_path
                        ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                        : `https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg`}
                    alt={item.original_title}
                    width={150}
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
            </li>
        )
    })
    return (
    <div>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isItems && (
        <ul className={styles.castList}>
            {elements}
        </ul>
        )}
    </div>
    )
}

export default Cast;