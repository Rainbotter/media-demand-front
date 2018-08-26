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
  recaptcha: {
    key: '6LdMAmoUAAAAAIILNttmTzzk5AqDc8ZuKdfH6253',
    scriptUrl: 'https://www.google.com/recaptcha/api.js?render=6LdMAmoUAAAAAIILNttmTzzk5AqDc8ZuKdfH6253'
  }
};
