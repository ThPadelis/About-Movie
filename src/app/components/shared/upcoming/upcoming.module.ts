import { NgModule } from "@angular/core";
import { UpcomingComponent } from "./upcoming.component";
import {
  ButtonsModule,
  WavesModule,
  CardsFreeModule,
  IconsModule,
} from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UpcomingComponent],
  imports: [
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    IconsModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [UpcomingComponent],
})
export class UpcomingModule {}
