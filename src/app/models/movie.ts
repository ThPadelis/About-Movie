export class Movie {
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: Array<object>;
  homepage?: string | null;
  imdb_id?: string | null;
  production_companies?: Array<object>;
  production_countries?: Array<object>;
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: Array<object>;
  status?: string;
  tagline?: string | null;

  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
