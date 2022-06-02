import { useState, useEffect, } from 'react'

import { getMovieById } from 'shared/services/api'

import styles from './movieDescription.module.css'


function MovieDescription({ id }) {

    const [movie, setMovie] = useState({
        items: {},
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovieDescription = async () => {
            setMovie(prevState => ({ ...prevState, loading: true }));
            const results = await getMovieById(id);
            
            const genresType = results.genres.map(genre => genre.name);
            
            try {
                setMovie(prevState => ({
                    ...prevState,
                    items: { ...results, genresType },
                    loading: false,
                }))
            } catch (error) {
                setMovie(prevState => ({
                    ...prevState,
                    error: error.message,
                    loading: true,
                }))
            }
        }
        fetchMovieDescription()
    }, [id]);

    const { items, loading, error } = movie;
    const isItems = Boolean(Object.values(items).length);

    return (
    <div className={styles.descriptionContainer}>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isItems && (
        <>
            <div className={styles.card}>
                <img
                    src={items.poster_path
                        ? `https://image.tmdb.org/t/p/w500${items.poster_path}`
                        : `https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg`}
                    alt={items.original_title}
                    width={250}
                />
                <div className={styles.description}>
                        <h2 className={styles.title}>
                            {items.original_title}
                            ({(items.release_date).slice(0, 4)})
                        </h2>
                    <p> User score: {items.vote_average}</p>
                    <p>
                        <span>Overview:</span>
                        <span> {items.overview}</span>
                    </p>
                    <p>
                        <span>Genres:</span>
                        <span> {items.genresType}</span>
                    </p>
                </div>
            </div>
        </>
        )}
    </div>
    )
}

export default MovieDescription;