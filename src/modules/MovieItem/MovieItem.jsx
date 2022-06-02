import { Link } from 'react-router-dom';

import styles from './movieItem.module.css';

function MoviesItems({ id, original_title, poster_path, from }) {
    
    return (
        <li key={id} className={styles.movieItem}>
            <Link state={{ from }} to={`/movies/${id}`} className={styles.MovieItemTitle}>
                <div className={styles.movieCard}>
                    <img
                        src={poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg`}
                        alt={original_title}
                        width={250}
                    />
                    <p className={styles.title}>{original_title}</p>
                </div>
            </Link>
        </li>
    )
}

export default MoviesItems;