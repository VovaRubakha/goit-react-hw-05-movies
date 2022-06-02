import { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchMoviesForm from './SearchMoviesForm';
import MoviesList from 'modules/MoviesList';

import { getMovieByName } from 'shared/services/api';

import styles from './searchMovies.module.css'


function SearchMovies() {    
    const [movies, setMovies] = useState({
        items: [],
        loading: false,
        error: null,
    });
    
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        const fetchMovies = async () => {
            setMovies(prevState => ({
                ...prevState,
                loading: true,
                error: null,
            }));
            
            try {
                const result = await getMovieByName(query);
                setMovies(prevState => ({
                    ...prevState,
                    loading: false,
                    items: result,
                }));
            } catch (error) {
                setMovies(prevState => ({
                    ...prevState,
                    loading: false,
                    error: error.message
                }));
            }
        };
        if (query) {
            fetchMovies()
        }
    }, [query])

    const onSubmit = ({ query }) => setSearchParams({ query })
    const { items, loading, error } = movies;
    
    return (
        <div >

            <SearchMoviesForm onSubmit={onSubmit} className={styles.searchMoviesForm }/>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            {Boolean(items.length) &&
                <MoviesList items={items} />
            }
        </div>
    )
}

export default SearchMovies;