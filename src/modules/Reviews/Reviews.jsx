import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getMovieReviews } from 'shared/services/api';
import styles from './reviews.module.css'

function Reviews() {
    const [reviews, setReviews] = useState({
        items: [],
        loading: false,
        error: null,

    });
    const { id } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            setReviews(prevState => ({ ...prevState, loading: true }));
            const {results} = await getMovieReviews(id);

            try {
                setReviews(prevState => ({
                    ...prevState,
                    items: results,
                    loading: false,
                }))
            } catch (error) {
                setReviews(prevState => ({
                    ...prevState,
                    error: error.message,
                    loading: true,
                }))
            }
        }
        fetchMovies()
    }, [id]);
    
    const { items, loading, error } = reviews;
    const isItems = Boolean(Object.values(items).length);

    const elements = items.map(item => {
        return(
            <li key={item.id} className={styles.reviewsItem}>
                <p>Author: {item.author}</p>
                <p>{item.content}</p>
            </li>
        )
    })
    return (
    <div>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isItems && (
        <ul className={styles.reviewsList}>
            {elements}
        </ul>
        )}
    </div>
    )
}
            
export default Reviews;