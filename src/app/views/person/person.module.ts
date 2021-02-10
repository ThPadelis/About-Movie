import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonComponent } from "./person.component";
import { NavigationModule } from "src/app/components/shared/navbar/navbar.module";
import { PersonCardModule } from "src/app/components/shared/person-card/person-card.module";
import { HeaderModule } from "src/app/components/shared/header/header.module";
import { PipesModule } from "src/app/pipes/pipes.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PersonComponent,
  },
];
@NgModule({
  declarations: [PersonComponent],
  imports: [
    RouterModule.forChild(routes),
    NavigationModule,
    PersonCardModule,
    HeaderModule,
    PipesModule,
    CommonModule,
  ],
  exports: [PersonComponent],
})
export class PersonModule {}
