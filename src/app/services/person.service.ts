import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  private baseUrl = "https://api.themoviedb.org/3";
  private params = { params: { api_key: environment.apiKey } };
  constructor(private http: HttpClient) {}

  getDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/${id}`, this.params);
  }
}
