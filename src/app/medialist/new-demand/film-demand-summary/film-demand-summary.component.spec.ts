import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDemandSummaryComponent } from './film-demand-summary.component';

describe('FilmDemandSummaryComponent', () => {
  let component: FilmDemandSummaryComponent;
  let fixture: ComponentFixture<FilmDemandSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDemandSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDemandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
