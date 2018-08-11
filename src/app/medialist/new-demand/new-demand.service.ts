import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from '../../../../node_modules/rxjs';

@Injectable()
export class NewDemandService {

  constructor(private http: HttpClient) {
  }

  sendNewDemand(demandFormGroup: FormGroup): Observable<Object> {
    const url = environment.baseUrl + environment.api.music.postMusicDemand;
    return this.http.post(url, demandFormGroup.value);
  }

}
