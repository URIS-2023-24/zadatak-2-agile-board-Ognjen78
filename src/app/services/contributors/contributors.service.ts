import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  baseUrl = "https://app.microenv.com/backend/key/2643518d4db29a03b2d555/rest/api/contributors/";

  constructor(private http: HttpClient) { }

  public getContributors(): Observable<any> {
      return this.http.get(this.getUrl())
        .pipe(map((response: Response) => response));
  }

  private getUrl() {
    return `${this.baseUrl}`;
  }
}
