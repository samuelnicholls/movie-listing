import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBox from '@/components/SearchBox';
import Title from '@/components/Title';
import { Movie } from '@/types';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import getMovies from './api/getMovies';

const Home: NextPage = () => {
  const [data, setData] = useState<Movie[]>([
    {
      poster_path: "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      title: "The Dark Knight",
      release_date: "2008-07-14"
    },
    {
      poster_path: "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      title: "The Dark Knight",
      release_date: "2008-07-14"
    },
    {
      poster_path: "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      title: "The Dark Knight",
      release_date: "2008-07-14"
    },
    {
      poster_path: "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      title: "The Dark Knight",
      release_date: "2008-07-14"
    }
  ]);

  // useEffect(() => {
  //   getMovies()
  //     .then((data) => {
  //       setData(data.results);
  //     })
  //     .catch((error) => console.log('getMovies.error', error));
  // }, []);

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
            <SearchBox />
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {data.map((movie, index) => (
                <div key={index} className="my-3 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                  <Card posterPath={movie.poster_path} title={movie.title} releaseDate={movie.release_date} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
