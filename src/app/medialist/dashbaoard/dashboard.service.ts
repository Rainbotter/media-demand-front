import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Statistics} from '../model/statistics/Statistics';

@Injectable()
export class DashboardService {

  private statistics: Statistics;
  private statsUrl = environment.baseUrl + environment.api.statistics;

  constructor(private http: HttpClient) {
  }

  public getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(this.statsUrl);
  }

}
