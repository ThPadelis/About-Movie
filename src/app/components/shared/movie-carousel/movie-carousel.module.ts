import { NgModule } from "@angular/core";
import { MovieCarouselComponent } from "./movie-carousel.component";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MovieCarouselComponent],
  imports: [CarouselModule, WavesModule, CommonModule, FormsModule],
  exports: [MovieCarouselComponent]
})
export class MovieCarouselModule {}
