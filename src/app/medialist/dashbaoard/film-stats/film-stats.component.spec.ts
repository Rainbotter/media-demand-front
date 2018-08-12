import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmStatsComponent } from './film-stats.component';

describe('FilmStatsComponent', () => {
  let component: FilmStatsComponent;
  let fixture: ComponentFixture<FilmStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
