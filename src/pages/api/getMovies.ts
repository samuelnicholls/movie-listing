export default async function getMovies(): Promise<any> {
  return fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=c1bdb094fe63d4afc855acb4db0e462e&language=en-EN&page=1',
  ).then((response) => response.json());
}
