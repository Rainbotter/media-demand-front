import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDemandFormComponent } from './serie-demand-form.component';

describe('SerieDemandFormComponent', () => {
  let component: SerieDemandFormComponent;
  let fixture: ComponentFixture<SerieDemandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDemandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDemandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
