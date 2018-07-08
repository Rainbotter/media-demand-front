import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demand-type-form',
  templateUrl: './demand-type-form.component.html',
  styleUrls: ['./demand-type-form.component.css']
})
export class DemandTypeFormComponent implements OnInit {

  types: any[];

  demandTypeFormGroup: FormGroup;
  mediaType: FormControl;

  @Output() public mediaTypeChanged = new EventEmitter<String>();
  @Output() public demandTypeFormGroupCreate = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.types = [
      {value: 'music', viewValue: 'Musique'},
      {value: 'film', viewValue: 'Film'},
      {value: 'serie', viewValue: 'Série'}
    ];
  }

  ngOnInit() {
    this.mediaType = new FormControl('', [Validators.required]);
    this.demandTypeFormGroup = this.fb.group({
      mediaType: this.mediaType
    });

    this.demandTypeFormGroupCreate.emit(this.demandTypeFormGroup);
  }

  selectionChange() {
    this.mediaTypeChanged.emit(this.mediaType.value);
  }
}
