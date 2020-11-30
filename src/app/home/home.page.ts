import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../api/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies = [];
  
  constructor(private moviesService : MoviesService) {}

  ngOnInit() {
    this.moviesService.movies.subscribe(movies => {
      this.movies = movies;
    });
    //this.moviesService.getMovies();
  }
}
