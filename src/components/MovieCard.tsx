import { useMemo } from 'react';
import { MovieInterface } from '../interfaces/MovieInterface.ts';

const MovieCard = (props: { data: MovieInterface }) => {
  const { data } = props;

  const dateYear = useMemo(() => {
    const date = new Date(data.release_date);
    return date.getFullYear();
  }, [data.release_date]);

  return (
    <div className={'group my-3 flex justify-center px-3 lg:my-4 lg:px-4'}>
      <div className={'relative flex cursor-pointer flex-col items-center hover:shadow-lg'}>
        <img
          width={360}
          height={200}
          alt={data.title}
          className={'rounded-2xl shadow-lg'}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = '/broken-images.png';
          }}
          src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
        />
        <div className={'absolute bottom-0 w-full rounded-b-2xl bg-gray-200 opacity-80'}>
          <div className={'truncate px-4 py-2 text-gray-900 group-hover:whitespace-normal'}>
            <span className={'text-md'}>{data.title}</span>
            <span className={'text-md ml-1'}>{`(${dateYear})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
