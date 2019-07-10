import { Component, OnInit } from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { MovieService } from "src/app/services/movie.service";
import { Movie } from "src/app/models/movie";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  public movies: Movie[];
  public trending: Movie[];
  public upcoming: Movie;
  constructor(
    private movieService: MovieService,
    private ngxService: NgxUiLoaderService
  ) {}

  async ngOnInit() {
    this.ngxService.start();

    await this.movieService
      .getPopular()
      .subscribe(m => (this.movies = m.results));

    await this.movieService
      .getUpcoming()
      .subscribe(m => (this.upcoming = m.results[this.randomInt(0, 20)]));

    await this.movieService
      .getTrending()
      .subscribe(m => (this.trending = m.results.slice(0, 4)));

    this.ngxService.stop();
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
