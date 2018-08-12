import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicStatsComponent } from './music-stats.component';

describe('MusicStatsComponent', () => {
  let component: MusicStatsComponent;
  let fixture: ComponentFixture<MusicStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
