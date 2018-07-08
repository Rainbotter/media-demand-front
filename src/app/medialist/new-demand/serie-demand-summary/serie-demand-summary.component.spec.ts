import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDemandSummaryComponent } from './serie-demand-summary.component';

describe('SerieDemandSummaryComponent', () => {
  let component: SerieDemandSummaryComponent;
  let fixture: ComponentFixture<SerieDemandSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDemandSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDemandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
