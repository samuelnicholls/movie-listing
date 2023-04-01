import Card from '@/components/Card';
import SearchBox from '@/components/SearchBox';
import Title from '@/components/Title';
import { Movie } from '@/types';
import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import fetchAllMovies from './api/fetchAllMovies';
import fetchSearchedMovies from './api/fetchSearchedMovies';
import useDebounce from '@/hooks/useDebounce';
import type { NextPage } from 'next';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Error from '@/components/Error';

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchMovies = ({ pageParam = 1 }) => {
    if (!searchTerm) {
      return fetchAllMovies(pageParam);
    } else {
      return fetchSearchedMovies(pageParam, searchTerm);
    }
  };

  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['allMovies', useDebounce<string>(searchTerm, 500)],
    fetchMovies,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page !== lastPage.total_pages) {
          return lastPage.page + 1;
        }
      },
    },
  );

  return (
    <div className="container mx-auto">
      <Title text="Movie Listing" />
      <div className="container md:my-12 mx-auto px-4 md:px-12">
        <SearchBox setSearchTerm={setSearchTerm} />
        {isError && (
          <Error text="Error loading movies, please refresh and try again." />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {data?.pages.map((page) =>
              page.results.map((movie: Movie, index: number) => (
                <div
                  key={index}
                  className="my-3 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                >
                  <Card
                    id={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
      {(hasNextPage && !isError) && (
        <Button
          onClick={() => {
            fetchNextPage();
          }}
          disabled={isFetchingNextPage}
          text="Load More"
        />
      )}
    </div>
  );
};

export default Home;
