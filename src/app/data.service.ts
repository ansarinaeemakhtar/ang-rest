import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getUsersData() {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }

  getAlbumsData() {
    return this._http.get("https://jsonplaceholder.typicode.com/albums");
  }

  getCommentsData() {
    return this._http.get("https://jsonplaceholder.typicode.com/comments");
  }
}
