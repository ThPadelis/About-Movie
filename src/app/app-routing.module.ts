import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./views/movies/movies.component";
import { MovieComponent } from "./views/movie/movie.component";
import { PersonComponent } from "./views/person/person.component";

const routes: Routes = [
  {
    path: "",
    component: MoviesComponent
  },
  {
    path: "movies/:id",
    component: MovieComponent
  },
  {
    path: "persons/:id",
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
