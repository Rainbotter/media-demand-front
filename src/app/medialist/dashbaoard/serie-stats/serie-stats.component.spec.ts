import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieStatsComponent } from './serie-stats.component';

describe('SerieStatsComponent', () => {
  let component: SerieStatsComponent;
  let fixture: ComponentFixture<SerieStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
