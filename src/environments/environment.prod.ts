const HOST = 'https://tracker.bober.ovh';

export const environment = {
  production: true,
  baseUrl: HOST + '/api',
  api: {
    music: {
      getMusicDemands: '',
      getMusicDemandById: '/music/:id',
      postMusicDemand: '/music',
      resolveMusicDemand: '/music/:id/resolve'
    },
    film: {},
    serie: {},
    statistics: '/stats'
  }
};
