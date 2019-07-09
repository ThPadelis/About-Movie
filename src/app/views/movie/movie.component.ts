import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Movie } from "src/app/models/movie";
import { ActivatedRoute } from "@angular/router";
import { Video } from "src/app/models/Video";
import { Image } from "src/app/models/Image";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  private movie: Movie;
  private videos: Video[];
  private videoUrl;
  private backdrops: Image[];
  private posters: Image[];
  public imagePath = "https://image.tmdb.org/t/p/original";

  constructor(
    private movieService: MovieService,
    private ngxService: NgxUiLoaderService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.ngxService.start();
    this.movieService
      .getMovie(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(m => (this.movie = m));

    this.movieService
      .getVideos(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(v => {
        this.videos = v.results;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${v.results[0].key}?controls=0`
        );
      });

    this.movieService
      .getImages(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(images => {
        this.backdrops = images.backdrops;
        this.posters = images.posters;
      });

    this.ngxService.stop();
  }
}
