import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import getMovies from './api/getMovies';

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMovies()
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => console.log('getMovies.error', error));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Movie Listing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col px-20 py-8 text-center bg-gray-800">
        <div className="container mx-auto">
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Movie Listing
          </h1>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="my-20">
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {data.map((movie: any, index: number) => (
                <div
                  key={index}
                  className="my-3 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                >
                  <img
                    className="rounded-3xl shadow-lg"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="TODO"
                  />
                  <div className="mt-6">
                    <p className=" text-left text-white text-2xl">
                      {movie.title}
                    </p>
                    <p className="text-md mt-2 text-white text-left">TODO</p>
                  </div>
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
