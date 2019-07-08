import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
  selector: "app-movie-carousel",
  templateUrl: "./movie-carousel.component.html",
  styleUrls: ["./movie-carousel.component.scss"]
})
export class MovieCarouselComponent implements OnInit {
  @Input() movies: Movie[];
  public imagePath = "https://image.tmdb.org/t/p/original";
  constructor() {}

  ngOnInit() {}
}
