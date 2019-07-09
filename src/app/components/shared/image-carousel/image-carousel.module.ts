import { NgModule } from "@angular/core";
import { ImageCarouselComponent } from "./image-carousel.component";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ImageCarouselComponent],
  imports: [CarouselModule, WavesModule, CommonModule],
  exports: [ImageCarouselComponent]
})
export class ImageCarouselModule {}
