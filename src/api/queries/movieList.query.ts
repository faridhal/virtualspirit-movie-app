import { useQuery } from '@tanstack/react-query';
import { MovieInterface } from '../../interfaces/MovieInterface.ts';
import { ResponseMovieList } from '../../interfaces/ResponseInterface.ts';
import { axiosInstanceMovie } from '../axios.config.ts';

interface MovieListParams {
  language?: string;
  disabled?: boolean;
  page: number;
}

export const useMoviePopularQuery = (args: MovieListParams) =>
  useQuery({
    queryKey: ['Popular', args],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: args.page + '',
        language: args.language || 'en-US'
      });
      const url = '/3/movie/popular?' + params;

      const res = await axiosInstanceMovie.get<ResponseMovieList<MovieInterface>>(url);
      return res.data;
    },
    enabled: !args.disabled
  });

export const useMovieSearchQuery = (args: { query: string }) =>
  useQuery({
    queryKey: ['Search', args],
    queryFn: async () => {
      const params = new URLSearchParams({ query: args.query });
      const url = '/3/search/movie?' + params;

      const res = await axiosInstanceMovie.get<ResponseMovieList<MovieInterface>>(url);
      return res.data;
    },
    enabled: args.query.length > 0
  });

export const useMovieNowPlayingQuery = (args: MovieListParams) =>
  useQuery({
    queryKey: ['nowPlaying', args],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: args.page + '',
        language: args.language || 'en-US'
      });
      const url = '/3/movie/now_playing?' + params;

      const res = await axiosInstanceMovie.get<ResponseMovieList<MovieInterface>>(url);
      return res.data;
    }
  });

export const useMovieTopRatedQuery = (args: MovieListParams) =>
  useQuery({
    queryKey: ['TopRated', args],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: args.page + '',
        language: args.language || 'en-US'
      });
      const url = '/3/movie/top_rated?' + params;

      const res = await axiosInstanceMovie.get<ResponseMovieList<MovieInterface>>(url);
      return res.data;
    }
  });

export const useMovieUpcomingQuery = (args: MovieListParams) =>
  useQuery({
    queryKey: ['upcoming', args],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: args.page + '',
        language: args.language || 'en-US'
      });
      const url = '/3/movie/upcoming?' + params;

      const res = await axiosInstanceMovie.get<ResponseMovieList<MovieInterface>>(url);
      return res.data;
    }
  });
