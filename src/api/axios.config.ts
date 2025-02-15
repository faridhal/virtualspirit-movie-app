import Axios from 'axios';

export const axiosInstanceMovie = Axios.create({
  baseURL: process.env.MOVIE_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.MOVIE_SECRET_KEY}`,
    Accept: 'application/json'
  }
});
