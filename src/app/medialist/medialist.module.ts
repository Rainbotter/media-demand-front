import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {APP_ROUTES} from './medialist.routes';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {DashbaoardComponent} from './dashbaoard/dashbaoard.component';
import {NewDemandComponent} from './new-demand/new-demand.component';
import {DemandsComponent} from './demands/demands.component';
import {DemandTypeFormComponent} from './new-demand/demand-type-form/demand-type-form.component';
import {MusicDemandFormComponent} from './new-demand/music-demand-form/music-demand-form.component';
import {FilmDemandFormComponent} from './new-demand/film-demand-form/film-demand-form.component';
import {SerieDemandFormComponent} from './new-demand/serie-demand-form/serie-demand-form.component';
import {FilmDemandSummaryComponent} from './new-demand/film-demand-summary/film-demand-summary.component';
import {MusicDemandSummaryComponent} from './new-demand/music-demand-summary/music-demand-summary.component';
import {SerieDemandSummaryComponent} from './new-demand/serie-demand-summary/serie-demand-summary.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewDemandService} from './new-demand/new-demand.service';
import {HttpClientModule} from '@angular/common/http';
import {MusicStatsComponent} from './dashbaoard/music-stats/music-stats.component';
import {SerieStatsComponent} from './dashbaoard/serie-stats/serie-stats.component';
import {FilmStatsComponent} from './dashbaoard/film-stats/film-stats.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardService} from './dashbaoard/dashboard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    APP_ROUTES,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DemandsComponent,
    DashbaoardComponent,
    NewDemandComponent,
    DemandTypeFormComponent,
    MusicDemandFormComponent,
    FilmDemandFormComponent,
    SerieDemandFormComponent,
    FilmDemandSummaryComponent,
    MusicDemandSummaryComponent,
    SerieDemandSummaryComponent,
    MusicStatsComponent,
    SerieStatsComponent,
    FilmStatsComponent
  ],
  providers: [
    NewDemandService,
    DashboardService
  ]
})

export class MedialistModule {
}
