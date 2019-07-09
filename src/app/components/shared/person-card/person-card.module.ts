import { NgModule } from "@angular/core";
import { PersonCardComponent } from "./person-card.component";
import {
  ButtonsModule,
  WavesModule,
  CardsFreeModule,
  IconsModule
} from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PersonCardComponent],
  imports: [
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    IconsModule,
    CommonModule
  ],
  exports: [PersonCardComponent]
})
export class PersonCardModule {}
