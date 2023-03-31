import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBox from '@/components/SearchBox';
import Title from '@/components/Title';
import { Movie } from '@/types';
import Head from 'next/head';
import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import fetchAllMovies from './api/fetchAllMovies';
import fetchSearchedMovies from './api/fetchSearchedMovies';
import useDebounce from '@/hooks/useDebounce';
import type { NextPage } from 'next';
import Button from '@/components/Button';

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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Movie Listing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col py-8 lg:py-20 text-center bg-gray-800">
        <div className="container mx-auto">
          <Title text="Movie Listing" />
          <div className="container md:my-12 mx-auto px-4 md:px-12">
            <SearchBox setSearchTerm={setSearchTerm} />
            {isLoading && <p>Is Loading</p>}
            {isError && <p>Is Error</p>}
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {data &&
                data.pages.map((page) =>
                  page.results.map((movie: Movie, index: number) => (
                    <div
                      key={index}
                      className="my-3 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                    >
                      <Card
                        posterPath={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                      />
                    </div>
                  )),
                )}
            </div>
          </div>
          {hasNextPage && (
            <Button
              onClick={() => {
                fetchNextPage();
              }}
              disabled={isFetchingNextPage}
              text="Load More"
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
