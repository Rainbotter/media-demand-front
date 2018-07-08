import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDemandFormComponent } from './music-demand-form.component';

describe('MusicDemandFormComponent', () => {
  let component: MusicDemandFormComponent;
  let fixture: ComponentFixture<MusicDemandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDemandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDemandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
