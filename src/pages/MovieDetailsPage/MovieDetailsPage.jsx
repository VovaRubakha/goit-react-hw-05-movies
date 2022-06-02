import { Link, useParams, Outlet, useNavigate, useLocation} from 'react-router-dom';

import MovieDescription from 'modules/MovieDescription';
import styles from './movieDetailsPage.module.css'

const MoviesDetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || "/movies";

    const goBack = () => navigate(from);

    return (
        <div className={styles.DetailsPageContainer}>
            <button type="button" className={styles.button} onClick={goBack}>
                Go Back
            </button>
            <MovieDescription id={id} />
            <Link state={{ from }} to={`/movies/${id}/cast`}
            className={styles.Cast}>
                Cast
            </Link>
            <Link state={{ from }} to={`/movies/${id}/reviews`}
            className={styles.Reviews}>
                Reviews
            </Link>
            <Outlet/>
        </div>
    )
}

export default MoviesDetailsPage;