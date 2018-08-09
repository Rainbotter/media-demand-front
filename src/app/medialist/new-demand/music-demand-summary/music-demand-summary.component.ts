import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NewDemandService} from '../new-demand.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-music-demand-summary',
  templateUrl: './music-demand-summary.component.html',
  styleUrls: ['./music-demand-summary.component.css']
})
export class MusicDemandSummaryComponent implements OnInit {

  @Input() demandFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
