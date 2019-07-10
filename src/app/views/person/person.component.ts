import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/person.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ActivatedRoute } from "@angular/router";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"]
})
export class PersonComponent implements OnInit {
  public person: Person;
  constructor(
    private personService: PersonService,
    private ngxService: NgxUiLoaderService,
    private router: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.ngxService.start();

    await this.personService
      .getDetails(Number(this.router.snapshot.paramMap.get("id")))
      .subscribe(p => (this.person = p));

    this.ngxService.stop();
  }
}
