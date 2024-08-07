import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/shared/movie.model';
import { MovieService } from 'src/shared/movie.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovs().then(res => {this.movies = res});
  }

  goToDetailPage(movieId: number): void {
    this.router.navigate(['/detail', movieId]);
  }

  goToCreatePage(): void {
    this.router.navigate(['/create']);
  }
}
