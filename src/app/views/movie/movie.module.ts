import { NgModule } from "@angular/core";
import { MovieComponent } from "./movie.component";
import { NavigationModule } from "src/app/components/shared/navbar/navbar.module";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "src/app/components/shared/header/header.module";
import { ImageCarouselModule } from "src/app/components/shared/image-carousel/image-carousel.module";
import { RatingModule } from "src/app/components/shared/rating/rating.module";
import { PipesModule } from "src/app/pipes/pipes.module";
import { PersonCardModule } from "src/app/components/shared/person-card/person-card.module";

@NgModule({
  declarations: [MovieComponent],
  imports: [
    PipesModule,
    HeaderModule,
    NavigationModule,
    ImageCarouselModule,
    RatingModule,
    CommonModule,
    PersonCardModule
  ],
  exports: [MovieComponent]
})
export class MovieModule {}
