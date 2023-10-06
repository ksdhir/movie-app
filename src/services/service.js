import { BASE_URL, APP_KEY } from '../config/apiConfig.js';

const getMovies = async (filterBy = 'now_playing', type="movie") => {


  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${APP_KEY}`,
  };

  const response = await fetch(
    `${BASE_URL}/${type}/${filterBy}?language=en-US&page=1`,
    {
      method: 'GET',
      headers,
    }
  );

  const data = await response.json();
  return data;
};

const searchMovies = async (type = 'multi', query) => {
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${APP_KEY}`,
  };

  const response = await fetch(
    `${BASE_URL}/search/${type}?query=${query}&language=en-US&page=1`,
    {
      method: 'GET',
      headers,
    }
  );

  const data = await response.json();
  return data;
};

export { getMovies, searchMovies };
