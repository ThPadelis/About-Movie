import { Movie } from "./movie";

export class Response {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
}
