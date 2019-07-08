import { NgModule } from "@angular/core";
import { UpcomingComponent } from "./upcoming.component";
import {
  ButtonsModule,
  WavesModule,
  CardsFreeModule,
  IconsModule
} from "angular-bootstrap-md";

@NgModule({
  declarations: [UpcomingComponent],
  imports: [ButtonsModule, WavesModule, CardsFreeModule, IconsModule],
  exports: [UpcomingComponent]
})
export class UpcomingModule {}
