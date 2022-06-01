import SearchMovies from 'modules/SearchMovies'

import styles from './moviesPage.module.css'

const MoviesPage = () => {
    return (
        <div>
            <h2 className={styles.MoviesPage}>MoviesPage</h2>
            <SearchMovies/>
        </div>
    )
}

export default MoviesPage