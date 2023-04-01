/* eslint-disable no-console */
import type { NextPage } from 'next';
import { useRouter } from "next/router";
import fetchSingleMovie from '../api/fetchSingleMovie';
import { useQuery } from 'react-query';
import Image from 'next/image';
import Title from '@/components/Title';
import Button from '@/components/Button';
import { USDollarFormatter } from '@/utils';

const Movie: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, data } = useQuery(
    ["singleMovie", id],
    () => fetchSingleMovie(id?.toString())
  );

  console.log("data", data)
  return (
    <div className="container mx-auto">
      <div className='flex mb-5'>
        <Button onClick={() => router.back()} text='Go Back' />
      </div>
      {data && (
        <>
          <Title text={data.title} />
          <div className="grid md:grid-cols-2 gap-4 mt-20">
            <div className='flex justify-center'>  
              <Image
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={"sdsdsd"}
                className="rounded-3xl shadow-lg"
                priority
                width="350"
                height="450"
              />
            </div>
            <div className='text-xl text-left text-white leading-7	'>
              <p>{data.overview}</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul>
                <li>Genres: {data.genres.map((genre: any, i: number) => (<span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">{genre.name}</span>))}</li>
                <li>Rating: {Math.floor(data.vote_average)} / 10</li>
                <li>Release Date: {data.release_date}</li>
                <li>Runtime: {data.runtime} mins</li>
                <li>Budget: {(USDollarFormatter.format(data.budget))}</li>
                <li>Revenue: {(USDollarFormatter.format(data.revenue))}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
