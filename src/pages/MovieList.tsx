import { useEffect, useMemo, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { useMoviePopularQuery, useMovieSearchQuery } from '../api/queries/movieList.query.ts';
import SearchIcon from '../assets/searchIcon.tsx';
import Spinner from '../assets/spinner.tsx';
import MovieCard from '../components/MovieCard.tsx';
import ViewMoreDivider from '../components/ViewMoreDivider.tsx';
import { MovieInterface } from '../interfaces/MovieInterface.ts';

const MovieList = () => {
  const [page, setPage] = useState<number>(1);
  const [listMovie, setMovieList] = useState<MovieInterface[]>([]);
  const [searchText, setSearchText] = useDebounceValue('', 500);

  const { isLoading, data } = useMoviePopularQuery({
    page,
    disabled: searchText.length > 0
  });

  const { isLoading: loadingSearch, data: dataSearch } = useMovieSearchQuery({
    query: searchText
  });

  const isHaveNextPage = useMemo(() => {
    return !(!data || data.total_pages <= page);
  }, [data, page]);

  useEffect(() => {
    if (dataSearch && dataSearch.results) {
      setMovieList(dataSearch.results);
    }
  }, [dataSearch]);

  useEffect(() => {
    if (data && data.results) {
      if (page === 1) {
        setMovieList(data.results);
        return;
      }
      setMovieList((v) => [...v, ...data.results]);
    }
  }, [data, page]);

  useEffect(() => {
    if (searchText.length === 0) {
      setPage(1);
    }
  }, [searchText]);

  return (
    <main className={'flex w-full flex-1 flex-col bg-gray-800 px-4 py-4 text-center lg:py-8'}>
      <div className={'container mx-auto'}>
        <div className={'my-8'}>
          <label htmlFor="search" className={'sr-only mb-2 text-sm font-medium text-white'}>
            Search
          </label>
          <div className={'relative'}>
            <div className={'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'}>
              <SearchIcon size={'24px'} />
            </div>
            <input
              type={'search'}
              aria-label={'search'}
              placeholder={'Search'}
              onChange={(v) => setSearchText(v.target.value)}
              className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-3 pl-13 text-sm text-white"
            />
          </div>
        </div>
        <div className={'my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'}>
          {listMovie.length > 0 && listMovie.map((v) => <MovieCard key={v.id} data={v} />)}
        </div>
        {isLoading && loadingSearch && (
          <div className={'flex items-center justify-center'}>
            <Spinner />
          </div>
        )}
        {isHaveNextPage && !isLoading && <ViewMoreDivider onClick={() => setPage(page + 1)} />}
      </div>
    </main>
  );
};

export default MovieList;
