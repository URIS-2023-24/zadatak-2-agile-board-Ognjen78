import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://app.microenv.com/backend/key/2643518d4db29a03b2d555/rest/api/tasks/";

  public getTasks(): Observable<any> {
      return this.http.get(this.getUrl())
        .pipe(map((respnse: Response) => respnse));
  }

  private getUrl() {
    return `${this.baseUrl}`;
  }


}
