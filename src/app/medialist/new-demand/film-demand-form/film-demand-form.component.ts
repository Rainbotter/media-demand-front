import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-film-demand-form',
  templateUrl: './film-demand-form.component.html',
  styleUrls: ['./film-demand-form.component.css']
})
export class FilmDemandFormComponent implements OnInit {

  @Output() public demandFormGroupCreate = new EventEmitter<FormGroup>();

  constructor() {
  }

  ngOnInit() {
  }

}
