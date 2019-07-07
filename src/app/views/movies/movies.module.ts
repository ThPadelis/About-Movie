import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { NavigationModule } from "src/app/components/shared/navbar/navbar.module";

@NgModule({
  declarations: [MoviesComponent],
  imports: [NavigationModule],
  exports: [MoviesComponent]
})
export class MoviesModule {}
