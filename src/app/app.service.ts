import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPost(id: string): Observable<any> {
    const url = `/assets/posts/${id}.md`;
    return this.http.get(url);
  }
}
