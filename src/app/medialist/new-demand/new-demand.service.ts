import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class NewDemandService {

  private _recaptchaSiteKey: string;

  constructor(private http: HttpClient) {
    this._recaptchaSiteKey = environment.recaptchaKey;
  }

  sendNewDemand(demandFormGroup: FormGroup): Promise<Boolean> {
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
