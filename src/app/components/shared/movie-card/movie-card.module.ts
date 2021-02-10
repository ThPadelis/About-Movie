import { NgModule } from "@angular/core";
import { MovieCardComponent } from "./movie-card.component";
import {
  ButtonsModule,
  WavesModule,
  CardsFreeModule,
  TooltipModule,
} from "angular-bootstrap-md";
import { PipesModule } from "src/app/pipes/pipes.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    TooltipModule,
    PipesModule,
    RouterModule,
  ],
  exports: [MovieCardComponent],
})
export class MovieCardModule {}
