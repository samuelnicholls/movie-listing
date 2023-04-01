// TODO: Replace any with type
export default async function fetchSingleMovie(
  id: string | undefined,
): Promise<any> {
  if (!id) return
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-EN`,
  ).then((response) => {
    if (!response.ok)
      throw new Error('Failed to fetch movie, please try again!');
    return response.json();
  });
}
