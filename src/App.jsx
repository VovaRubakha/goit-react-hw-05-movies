import { Route, Routes } from 'react-router-dom';

import HeaderMenu from 'modules/HeaderMenu';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage';

import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
      <HeaderMenu/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};

export default App