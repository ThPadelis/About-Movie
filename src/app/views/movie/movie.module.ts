import { NgModule } from "@angular/core";
import { MovieComponent } from "./movie.component";
import { NavigationModule } from "src/app/components/shared/navbar/navbar.module";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "src/app/components/shared/header/header.module";
import { ImageCarouselModule } from "src/app/components/shared/image-carousel/image-carousel.module";
import { RatingModule } from "src/app/components/shared/rating/rating.module";

@NgModule({
  declarations: [MovieComponent],
  imports: [
    HeaderModule,
    NavigationModule,
    ImageCarouselModule,
    RatingModule,
    CommonModule
  ],
  exports: [MovieComponent]
})
export class MovieModule {}
