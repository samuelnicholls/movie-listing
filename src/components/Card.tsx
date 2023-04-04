import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type CardProps = {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
};

const Card: FC<CardProps> = ({ id, posterPath, title, releaseDate }) => {
  const renderReleaseDate = () => {
    if (!releaseDate) {
      return 'TBC';
    } else {
      return new Date(releaseDate).getFullYear();
    }
  };

  return (
    <Link href={`/movie/${id}`} className="flex flex-col items-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
        className="rounded-3xl shadow-lg"
        width="350"
        height="450"
        priority
      />
      <div className="mt-6 md:w-full md:text-left">
        <p className=" text-white text-2xl">{title}</p>
        <p className="text-md mt-2 text-white">{renderReleaseDate()}</p>
      </div>
    </Link>
  );
};

export default Card;
