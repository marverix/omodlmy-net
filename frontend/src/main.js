import finka from '@bitbar/finka';

import Vue from 'vue';
import VueVerify from 'vue-verify';
import vTostini from 'v-tostini';

import App from './App';

import router from './router';

import apiClient from './lib/api-client';
import i18n from './lib/i18n';

finka();

// Config
Vue.config.productionTip = false;

const env = {
  // eslint-disable-next-line no-undef
  url: `//${location.host}`,
  // eslint-disable-next-line no-undef
  version: `${__version}`
};

apiClient.setupClient(env.url);

// Use
Vue.use(VueVerify);
Vue.use(vTostini);

// Mixins
Vue.mixin({
  data () {
    return {
      env,
      i18n,
      apiClient
    }
  }
});

// create Vue
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


if (false && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data.msg === 'RELOAD') {
      window.location.reload();
    }
  });
} else {
    // The current browser doesn't support service workers.
}
