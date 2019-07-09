import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Endpoints } from "../models/endpoints";
import { Response } from "../models/response";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private params = { params: { api_key: environment.apiKey } };
  private baseUrl = "https://api.themoviedb.org/3";
  constructor(private http: HttpClient) {}

  getPopular(): Observable<any> {
    return this.http.get(this.baseUrl + Endpoints.popular, this.params);
  }

  getTopRated(): Observable<any> {
    return this.http.get(this.baseUrl + Endpoints.topRated, this.params);
  }

  getUpcoming(): Observable<any> {
    return this.http.get(this.baseUrl + Endpoints.upcoming, this.params);
  }

  getLatest(): Observable<any> {
    return this.http.get(this.baseUrl + Endpoints.latest, this.params);
  }

  getTrending(): Observable<any> {
    return this.http.get(this.baseUrl + Endpoints.trendingMovie, this.params);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}`, this.params);
  }

  getVideos(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos`, this.params);
  }

  getImages(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/images`, this.params);
  }
}
