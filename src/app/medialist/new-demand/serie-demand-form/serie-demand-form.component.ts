import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-serie-demand-form',
  templateUrl: './serie-demand-form.component.html',
  styleUrls: ['./serie-demand-form.component.css']
})
export class SerieDemandFormComponent implements OnInit {

  @Output() public demandFormGroupCreate = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
