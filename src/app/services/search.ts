import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Search {
  constructor(private http: HttpClient) {}

  // Example: returns array of results for a query
  search(query: string): Observable<any[]> {
    if (!query) {
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');
    }
    // Example using jsonplaceholder (filtering simulated by q param)
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}&_limit=10`
    );
  }
}
