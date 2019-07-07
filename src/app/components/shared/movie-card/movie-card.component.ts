import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  private imagePath = "https://image.tmdb.org/t/p/w500";
  constructor() {}

  ngOnInit() {
    console.log(this.movie);
  }
}
