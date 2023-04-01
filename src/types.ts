export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
};

export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
};
