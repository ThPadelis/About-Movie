import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";

import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  IconsModule,
  DropdownModule,
} from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    DropdownModule,
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent],
})
export class NavigationModule {}
