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

export type Genre = {
  id: number;
  name: string;
};

export type SingleMovieResponse = {
  title: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
  vote_average: number;
  release_date: string;
  runtime: number;
  budget: number;
  revenue: number;
};
