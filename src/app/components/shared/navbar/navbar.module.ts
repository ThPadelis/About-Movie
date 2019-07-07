import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";

import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  IconsModule,
  DropdownModule
} from "angular-bootstrap-md";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    DropdownModule
  ],
  exports: [NavbarComponent]
})
export class NavigationModule {}
