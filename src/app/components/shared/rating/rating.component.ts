import { Component, OnInit, Input } from "@angular/core";
import { Rating } from "src/app/models/rating";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  @Input() rating: Rating;
  constructor() {}

  ngOnInit() {}
}
