import { Component, OnInit } from "@angular/core";
import { Genre } from "src/app/models/genre";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public genres: Genre[];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getGenres().subscribe(g => (this.genres = g.genres));
  }
}
