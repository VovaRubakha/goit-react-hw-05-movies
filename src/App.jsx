import { Route, Routes } from 'react-router-dom';

import HeaderMenu from 'modules/HeaderMenu';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage';
import Cast from 'modules/Cast';
import Reviews from 'modules/Reviews';

import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
      <HeaderMenu/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:id' element={<MovieDetailsPage />} >
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};

export default App