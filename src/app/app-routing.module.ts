import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/movies/movies.module").then((m) => m.MoviesModule),
  },
  {
    path: "movies/:id",
    loadChildren: () =>
      import("./views/movie/movie.module").then((m) => m.MovieModule),
  },
  {
    path: "persons/:id",
    loadChildren: () =>
      import("./views/person/person.module").then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
