import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDemandSummaryComponent } from './music-demand-summary.component';

describe('MusicDemandSummaryComponent', () => {
  let component: MusicDemandSummaryComponent;
  let fixture: ComponentFixture<MusicDemandSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDemandSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDemandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
