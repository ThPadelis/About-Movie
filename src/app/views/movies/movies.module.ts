import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesComponent } from "./movies.component";
import { NavigationModule } from "src/app/components/shared/navbar/navbar.module";
import { MovieCardModule } from "src/app/components/shared/movie-card/movie-card.module";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "src/app/components/shared/header/header.module";
import { UpcomingModule } from "src/app/components/shared/upcoming/upcoming.module";
import { MovieCarouselModule } from "src/app/components/shared/movie-carousel/movie-carousel.module";

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    NavigationModule,
    MovieCardModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    UpcomingModule,
    MovieCarouselModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule {}
