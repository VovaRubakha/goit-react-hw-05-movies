import SearchMovies from 'modules/SearchMovies'

import styles from './moviesPage.module.css'

const MoviesPage = () => {
    return (
        <div className={styles.SearchMoviesContainer}>
            <SearchMovies/>
        </div>
    )
}

export default MoviesPage