import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class SeoService {
  constructor(private meta: Meta, private titleService: Title) {}

  public setTitle(pageTitle: string) {
    this.titleService.setTitle(`${pageTitle} | About Movie`);
  }

  public addMetaTags() {
    this.meta.addTags(
      [
        { name: "description", content: "About Movie is a website that " },
        { name: "robots", content: "INDEX, FOLLOW" },
        { name: "author", content: "Padelis Theodosiou" },
        { name: "keywords", content: "TypeScript, Angular, JavaScript" },
        { httpEquiv: "Content-Type", content: "text/html" },
        { charset: "UTF-8" }
      ],
      true
    );
  }
}
