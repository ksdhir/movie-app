import { BASE_URL, APP_KEY } from '../config/apiConfig.js';

const getMovies = async (type = 'now_playing') => {
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${APP_KEY}`,
  };

  const response = await fetch(
    `${BASE_URL}/movie/${type}?language=en-US&page=1`,
    {
      method: 'GET',
      headers,
    }
  );

  console.log(`${BASE_URL}/movies/${type}`);

  const data = await response.json();
  return data;
};

export { getMovies };
