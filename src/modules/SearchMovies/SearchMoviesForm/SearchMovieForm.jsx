import {useState} from "react";

import styles from './searchMovieForm.module.css';

const SearchMoviesForm = ({onSubmit}) => {
    const [state, setState] = useState({
        query: '',
    });

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({ query: ''})
    }

    return (
        <form className={styles.form } action="" onSubmit={handleSubmit}>
            <input className={styles.input } value={state.query} name="query" onChange={handleChange} type="text" placeholder="Search movies" required/>
        </form>
    )
}

export default SearchMoviesForm;