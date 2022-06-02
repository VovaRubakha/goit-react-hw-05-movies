import { useState, useEffect } from 'react'
import styles from './homePage.module.css'

import MoviesList from '../../modules/MoviesList'

import {getMovies} from '../../shared/services/api'

const HomePage = () => {
    const [movies, setMovies] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovies = async () => {
            setMovies(prevState => ({ ...prevState, loading: true }))
            const {results} = await getMovies();
            try {
                setMovies(prevState => ({
                    ...prevState,
                    loading: false,
                    items: results
                }))
            } catch (error) {
                setMovies(prevState => ({
                    ...prevState,
                    loading: false,
                    error: error.message
                }))
            }
        }
        fetchMovies()
    }, []);

    const { items, loading, error } = movies;
    return (
        <div className={styles.homePage__container}>
            {Boolean(items.length) && <MoviesList items={items}/>}
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default HomePage