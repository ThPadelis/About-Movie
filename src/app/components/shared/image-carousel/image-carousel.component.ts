import { Component, OnInit, Input } from "@angular/core";
import { Image } from "src/app/models/Image";

@Component({
  selector: "app-image-carousel",
  templateUrl: "./image-carousel.component.html",
  styleUrls: ["./image-carousel.component.scss"]
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: Image[];
  public imagePath = "https://image.tmdb.org/t/p/original";
  constructor() {}

  ngOnInit() {}
}
