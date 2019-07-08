import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.scss"]
})
export class UpcomingComponent implements OnInit {
  private imagePath = "https://image.tmdb.org/t/p/original";
  @Input() movie: Movie;
  constructor() {}

  ngOnInit() {}
}
