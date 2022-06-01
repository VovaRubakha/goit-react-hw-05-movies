import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e6567d4a77d2ad9d7e4d42f5f45f3e1d',
  },
});

export const getMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const searchFilmByName = async (query, page = 1) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
      page,
      include_adult: false,
      language: 'en - US',
    },
  });
  return data;
};
