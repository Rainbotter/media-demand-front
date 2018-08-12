import {MusicStatistics} from './MusicStatistics';
import {FilmStatistics} from './FilmStatistics';
import {SerieStatistics} from './SerieStatistics';

export class Statistics {
  music: MusicStatistics;
  film: FilmStatistics;
  serie: SerieStatistics;

  constructor() {
    this.music = new MusicStatistics();
    this.film = new FilmStatistics();
    this.serie = new SerieStatistics();
  }

}
