import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CreationPageComponent } from './creation-page/creation-page.component';
import { MovieService } from 'src/shared/movie.service';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieToolbarComponent } from './movie-toolbar/movie-toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MovieFooterComponent } from './movie-footer/movie-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewPageComponent,
    DetailPageComponent,
    CreationPageComponent,
    MovieToolbarComponent,
    MovieFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
