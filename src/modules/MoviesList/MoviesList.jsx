import { Link } from 'react-router-dom'

import styles from'./movieList.module.css'

const MovieList = ({items}) => {
    
    const elements = items.map(({ id, original_title }) => (
        <li key={id} className={styles.movieItem}>
            <Link to='/movies/${id}' className={styles.MovieItemTitle}>
                <p>{original_title}</p>
            </Link>
        </li>
    ));

    return (
        <ul className={styles.movieList}>
            {elements} 
        </ul>
    )
}

export default MovieList;

MovieList.defaultProps = {
    items: []
}