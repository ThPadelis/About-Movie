import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgxUiLoaderModule, SPINNER } from "ngx-ui-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MoviesModule } from "./views/movies/movies.module";
import { HttpClientModule } from "@angular/common/http";
import { MovieModule } from "./views/movie/movie.module";
import { PersonModule } from "./views/person/person.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot({ fgsType: SPINNER.foldingCube }),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MoviesModule,
    MovieModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
