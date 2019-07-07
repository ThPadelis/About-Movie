import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./views/movies/movies.component";

const routes: Routes = [
  {
    path: "",
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
