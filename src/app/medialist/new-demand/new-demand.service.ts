import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NewDemandService {

  private _recaptchaSiteKey: string;

  constructor(private http: HttpClient) {
    this._recaptchaSiteKey = environment.recaptcha.key;
  }

  sendNewDemand(demandFormGroup: FormGroup): Promise<Observable<Object>> {
    const url = environment.baseUrl + environment.api.music.postMusicDemand;

    return this.sendRecaptchaRequest().then(token => {
      demandFormGroup.value.token = token;
      return this.http.post(url, demandFormGroup.value);
    });
  }

  private sendRecaptchaRequest() {
    return (window as any).grecaptcha.execute(this._recaptchaSiteKey, {action: 'new_demand'})
      .then(function (token) {
        return token;
      });
  }

}
