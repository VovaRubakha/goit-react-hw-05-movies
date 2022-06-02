import { useLocation } from 'react-router-dom'

import MovieItem from 'modules/MovieItem';

import styles from'./movieList.module.css'

const MovieList = ({ items }) => {
    const location = useLocation();
    const elements = items.map((item => <MovieItem key={item.id} {...item} from={location}/>
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