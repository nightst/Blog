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

  getAssets(type: string): Observable<any> {
    const url = `assets/${type}.json`;
    return this.http.get(url);
  }
}
