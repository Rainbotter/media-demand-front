const HOST = 'https://demands.bober.ovh';

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
  },
  recaptchaKey: '6LdMAmoUAAAAAIILNttmTzzk5AqDc8ZuKdfH6253'
};
