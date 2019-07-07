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
  constructor(
    private movieService: MovieService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.ngxService.start();
    this.movieService.getPopular().subscribe(m => (this.movies = m.results));
    this.ngxService.stop();
  }
}
