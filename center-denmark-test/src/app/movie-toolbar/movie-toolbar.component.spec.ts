import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieToolbarComponent } from './movie-toolbar.component';

describe('MovieToolbarComponent', () => {
  let component: MovieToolbarComponent;
  let fixture: ComponentFixture<MovieToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieToolbarComponent]
    });
    fixture = TestBed.createComponent(MovieToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
