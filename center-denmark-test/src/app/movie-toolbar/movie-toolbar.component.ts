import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-toolbar',
  templateUrl: './movie-toolbar.component.html',
  styleUrls: ['./movie-toolbar.component.scss']
})
export class MovieToolbarComponent {


  constructor(private router: Router){}

  goToOverviewPage(): void {
    this.router.navigate(['/overview']);
  }

  goToCreatePage(): void {
    this.router.navigate(['/create']);
  }
}
