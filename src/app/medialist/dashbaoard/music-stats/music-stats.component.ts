import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MusicStatistics} from '../../model/statistics/MusicStatistics';
import {MusicDemand} from '../../model/demands/MusicDemand';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-stats',
  templateUrl: './music-stats.component.html',
  styleUrls: ['./music-stats.component.css']
})
export class MusicStatsComponent implements OnChanges {

  private _resolvedDemandsPercentage: number;
  private _averageResolveTime: number;
  private _musicStats: MusicStatistics;

  private _spinner_mode = 'determinate';
  private _spinner_value = 10;
  private _spinner_color = 'primary';
  private _spinner_text = '';

  constructor(private router: Router) {
    this._musicStats = new MusicStatistics();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.calculateResolvedDemandsPercentage();
  }

  private calculateResolvedDemandsPercentage(): void {
    this._resolvedDemandsPercentage = (this._musicStats.numberOfResolvedDemands / this._musicStats.numberOfCreatedDemands) * 100;
    this._spinner_value = this._resolvedDemandsPercentage;
    if (this._spinner_value < 10) {
      this._spinner_value = 10;
    }
    if (this._spinner_value <= 10) {
      this._spinner_color = 'warn';
    } else if (this._spinner_value > 10 && this._spinner_value < 100) {
      this._spinner_color = 'primary';
    } else {
      this._spinner_color = 'accent';
    }

    this._spinner_text = this._spinner_value + '% résolu';
  }

  public goToNewMusicDemand() {
    this.router.navigate(['demands/new'], {queryParams: {type: 'music'}});
  }

  get lastCreatedDemands(): MusicDemand[] {
    return this._musicStats.lastCreatedDemands;
  }

  get lastResolvedDemands(): MusicDemand[] {
    return this._musicStats.lastResolvedDemands;
  }

  get resolvedDemandsPercentage(): number {
    return this._resolvedDemandsPercentage;
  }

  get averageResolveTime(): number {
    return this._averageResolveTime;
  }

  get totalCreatedDemands(): number {
    return this._musicStats.numberOfCreatedDemands;
  }

  get totalResolvedDemands(): number {
    return this._musicStats.numberOfResolvedDemands;
  }


  get spinner_mode(): string {
    return this._spinner_mode;
  }

  get spinner_value(): number {
    return this._spinner_value;
  }

  get spinner_color(): string {
    return this._spinner_color;
  }

  get spinner_text(): string {
    return this._spinner_text;
  }

  @Input() set musicStats(value: MusicStatistics) {
    if (value) {
      this._musicStats = value;
    }
  }
}
