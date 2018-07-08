import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDemandFormComponent } from './film-demand-form.component';

describe('FilmDemandFormComponent', () => {
  let component: FilmDemandFormComponent;
  let fixture: ComponentFixture<FilmDemandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDemandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDemandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
