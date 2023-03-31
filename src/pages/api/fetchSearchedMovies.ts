import { MoviesResponse } from '@/types';

export default async function fetchSearchedMovies(
  pageParam: number,
  searchTerm: string,
): Promise<MoviesResponse> {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-EN&page=${pageParam}`,
  ).then((response) => {
    if (!response.ok)
      throw new Error('Failed to fetch searched movies, please try again!');
    return response.json();
  });
}
