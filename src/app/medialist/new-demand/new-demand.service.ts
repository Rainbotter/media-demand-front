import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class NewDemandService {

  constructor() {
  }

  sendNewDemand(demandFormGroup: FormGroup): Promise<boolean> {
    return Promise.resolve(true);
  }

}
