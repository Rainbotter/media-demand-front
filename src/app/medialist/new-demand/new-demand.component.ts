import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewDemandService} from './new-demand.service';
import {MatSnackBar, MatStepper} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-demand',
  templateUrl: './new-demand.component.html',
  styleUrls: ['./new-demand.component.css']
})
export class NewDemandComponent implements OnInit, OnChanges {

  demandTypeFormGroup: FormGroup;
  demandFormGroup: FormGroup;
  selectedType: string;

  firstStepOk = false;
  secondStepOk = false;
  postingNewDemand = false;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private newDemandService: NewDemandService,
              private snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute) {
    this.firstStepOk = false;
  }

  ngOnInit() {
    this.demandTypeFormGroup = new FormGroup({});
    this.demandFormGroup = new FormGroup({
      init: new FormControl('', [Validators.required])
    });

    this.route.queryParams.subscribe(params => {
      this.mediaTypeChanged(params['type']);
      this.stepper.selectedIndex = 2;
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change detected');
    this.demandFormGroup = new FormGroup({
      init: new FormControl('', [Validators.required])
    });
  }

  mediaTypeChanged(newMediaType: string) {
    this.firstStepOk = true;
    this.selectedType = newMediaType;
  }

  secondStepCompletionStatus(status: boolean) {
    this.secondStepOk = status;
  }

  demandTypeFormGroupCreate(newDemandTypeFormGroup: FormGroup) {
    this.demandTypeFormGroup = newDemandTypeFormGroup;
  }

  demandFormGroupCreate(newDemandFormGroupCreate: FormGroup) {
    this.demandFormGroup = newDemandFormGroupCreate;
  }

  sendNewMusicDemand() {
    this.postingNewDemand = true;
    this.newDemandService.sendNewDemand(this.demandFormGroup).subscribe(
      result => {
        this.postingNewDemand = false;
        this.confirmDemandIsSended();
      },
      err => {
        this.postingNewDemand = false;
        this.errorWhileProcessingRequest();
      });
  }

  private confirmDemandIsSended() {
    this.snackBar.open('Demande envoyée', '', {
      duration: 5000
    }).afterDismissed().toPromise().then(dismissed =>
      this.router.navigate(['/'])
    );
  }

  private errorWhileProcessingRequest() {
    this.snackBar.open('Un problème est survenu', '', {
      duration: 5000
    }).afterDismissed().toPromise().then(dismissed =>
      this.router.navigate(['/'])
    );
  }

}
