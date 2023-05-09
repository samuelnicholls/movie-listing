import { FC } from 'react';
import { useQuery } from 'react-query';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Error from '@/components/Error';
import Loader from '@/components/Loader';
import Title from '@/components/Title';

import fetchSingleMovie from '../api/fetchSingleMovie';

import { USDollarFormatter } from '@/utils';

const Movie: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, isError, data } = useQuery(['singleMovie', id], () =>
    fetchSingleMovie(id?.toString()),
  );

  const RenderListItem: FC<{ title: string; value: string }> = ({
    title,
    value,
  }) => {
    return (
      <li className="mb-1">
        <span className="font-bold">{title} </span>
        {value}
      </li>
    );
  };

  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex mb-5">
        <Button onClick={() => router.back()} text="Go Back" />
      </div>
      {isError && (
        <Error text="Error loading movie, please refresh and try again." />
      )}
      {isLoading && <Loader />}
      {data && (
        <>
          <Title text={data.title} />
          <div className="grid md:grid-cols-2 gap-4 mt-8 lg:mt-20">
            <div className="flex justify-center">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.title}
                className="rounded-3xl shadow-lg w-auto h-auto"
                width="350"
                height="450"
                priority
              />
            </div>
            <div className="text-xl text-left text-white leading-7">
              <p>{data.overview}</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul>
                <li className="mb-5">
                  {data.genres.map((genre, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {genre.name}
                    </span>
                  ))}
                </li>
                <RenderListItem
                  title="Rating: "
                  value={`${Math.floor(data.vote_average)} / 10`}
                />
                <li className="mb-1">
                  <span className="font-bold">Release Date: </span>
                  {data.release_date}
                </li>
                <li className="mb-1">
                  <span className="font-bold">Runtime: </span> {data.runtime}{' '}
                  mins
                </li>
                <li className="mb-1">
                  <span className="font-bold">Budget: </span>
                  {USDollarFormatter.format(data.budget)}
                </li>
                <li className="mb-1">
                  <span className="font-bold">Revenue: </span>{' '}
                  {USDollarFormatter.format(data.revenue)}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
