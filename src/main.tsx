import { init } from '@module-federation/runtime';

init({
  name: 'mf_host',
  remotes: [
    {
      name: 'mf_remote',
      entry: `http://localhost:4201/remoteEntry.js?v=${+Date.now()}`,
    },
  ]
});

import('./bootstrap');