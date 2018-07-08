import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-music-demand-form',
  templateUrl: './music-demand-form.component.html',
  styleUrls: ['./music-demand-form.component.css']
})
export class MusicDemandFormComponent implements OnInit, OnChanges {

  demandFormGroup: FormGroup;
  artiste: FormControl;
  fullDiscography: FormControl;
  album: FormControl;
  year: FormControl;
  genre: FormControl;

  yearInputType = 'month';

  @Output() public demandFormGroupCreate = new EventEmitter<FormGroup>();
  @Output() public status = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.artiste = new FormControl('', [Validators.required]);
    this.fullDiscography = new FormControl(false);
    this.album = new FormControl('', [Validators.required]);
    this.year = new FormControl('', [Validators.required]);
    this.genre = new FormControl('', [Validators.required]);

    this.demandFormGroup = this.fb.group({
      artiste: this.artiste,
      fullDiscography: this.fullDiscography,
      album: this.album,
      year: this.year,
      genre: this.genre
    });

    this.demandFormGroupCreate.emit(this.demandFormGroup);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.status.emit(this.demandFormGroup.valid);
  }

  fullDiscographyToggled() {
    if (this.fullDiscography.value) {
      this.album.clearValidators();
      this.year.clearValidators();
    } else {
      this.album.setValidators([Validators.required]);
      this.year.setValidators([Validators.required]);
    }

    this.album.updateValueAndValidity();
    this.year.updateValueAndValidity();
  }

}
