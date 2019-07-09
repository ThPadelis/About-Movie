import { Component, OnInit, Input } from "@angular/core";
import { Person } from "src/app/models/person";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-person-card",
  templateUrl: "./person-card.component.html",
  styleUrls: ["./person-card.component.scss"]
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;
  public basePath = "https://image.tmdb.org/t/p/original";
  public imagePath: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.imagePath = this.sanitizer.bypassSecurityTrustUrl(
      `${this.basePath}${this.person.profile_path}`
    );
  }
}
