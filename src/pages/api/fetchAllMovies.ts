import { MoviesResponse } from '@/types';

export default async function fetchAllMovies(
  pageParam: number,
): Promise<MoviesResponse> {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-EN&page=${pageParam}`,
  ).then((response) => {
    if (!response.ok)
      throw new Error('Failed to fetch all movies, please try again!');
    return response.json();
  });
}
