import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies = new Subject<any[]>();

  constructor(private http: HttpClient) { 
    this.getMovies();
  }

  getMovies() {
    this.http.get<any[]>("/api/v1/movies")
    .subscribe(response => {
      this.movies.next(response);
    });
  }
}
