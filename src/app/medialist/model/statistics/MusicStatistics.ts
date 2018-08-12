import {MusicDemand} from '../demands/MusicDemand';

export class MusicStatistics {
  lastCreatedDemands: MusicDemand[];
  lastResolvedDemands: MusicDemand[];
  numberOfCreatedDemands: number;
  numberOfResolvedDemands: number;
  averageResolveTime: number;

  constructor() {
    this.lastCreatedDemands = [];
    this.lastResolvedDemands = [];
    this.numberOfCreatedDemands = 0;
    this.numberOfResolvedDemands = 0;
    this.averageResolveTime = 0;
  }

}
