import { NgModule } from "@angular/core";
import { RatingComponent } from "./rating.component";
import { IconsModule, TooltipModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  declarations: [RatingComponent],
  imports: [IconsModule, CommonModule, PipesModule, TooltipModule],
  exports: [RatingComponent]
})
export class RatingModule {}
