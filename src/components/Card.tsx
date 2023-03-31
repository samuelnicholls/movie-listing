import { FC } from 'react';
import Image from 'next/image';

export type CardProps = {
  posterPath: string;
  title: string;
  releaseDate: string;
};

const Card: FC<CardProps> = ({ posterPath, title, releaseDate }) => {
  const renderReleaseDate = () => {
    if (!releaseDate) {
      return 'TBC';
    } else {
      return new Date(releaseDate).getFullYear();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
        className="rounded-3xl shadow-lg"
        width="350"
        height="450"
      />
      <div className="mt-6 md:w-full md:text-left">
        <p className=" text-white text-2xl">{title}</p>
        <p className="text-md mt-2 text-white">{renderReleaseDate()}</p>
      </div>
    </div>
  );
};

export default Card;
