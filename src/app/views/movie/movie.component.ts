import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Movie } from "src/app/models/movie";
import { ActivatedRoute } from "@angular/router";
import { Video } from "src/app/models/Video";
import { Image } from "src/app/models/Image";
import { DomSanitizer } from "@angular/platform-browser";
import { Person } from "src/app/models/person";
import { SeoService } from "src/app/services/seo.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  public movie: Movie;
  public videos: Video[];
  public videoUrl;
  public backdrops: Image[];
  public posters: Image[];
  public cast: Person[];
  public crew: Person[];
  public imagePath = "https://image.tmdb.org/t/p/original";

  constructor(
    private movieService: MovieService,
    private ngxService: NgxUiLoaderService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private seoService: SeoService
  ) {}

  async ngOnInit() {
    this.ngxService.start();

    await this.movieService
      .getMovie(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(m => {
        this.movie = m;
        this.seoService.setTitle(m.title);
      });

    await this.movieService
      .getVideos(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(v => {
        this.videos = v.results;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${v.results[0].key}?controls=0`
        );
      });

    await this.movieService
      .getImages(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(images => {
        this.backdrops = images.backdrops;
        this.posters = images.posters;
      });

    await this.movieService
      .getCredits(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(p => {
        this.cast = p.cast;
        this.crew = p.crew;
      });

    this.ngxService.stop();
  }
}
