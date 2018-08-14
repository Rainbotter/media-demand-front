import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {Statistics} from '../model/statistics/Statistics';

@Component({
  selector: 'app-dashbaoard',
  templateUrl: './dashbaoard.component.html',
  styleUrls: ['./dashbaoard.component.css']
})
export class DashbaoardComponent implements OnInit {

  private statistics: Statistics;

  constructor(private dashboardService: DashboardService) {
    this.statistics = new Statistics();
  }

  ngOnInit() {
    this.dashboardService.getStatistics().subscribe(data => {
      this.statistics = data;
    });
  }

  get musicStatistics() {
    return this.statistics.music;
  }

}
