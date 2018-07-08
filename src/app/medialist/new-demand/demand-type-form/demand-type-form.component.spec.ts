import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandTypeFormComponent } from './demand-type-form.component';

describe('DemandTypeFormComponent', () => {
  let component: DemandTypeFormComponent;
  let fixture: ComponentFixture<DemandTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
