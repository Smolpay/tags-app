import Vue from 'vue';
import Vuetify, {
  VIcon,
  VContainer,
  VApp
} from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.use(Vuetify);

Vue.component('v-icon', VIcon);
Vue.component('v-container', VContainer);
Vue.component('v-app', VApp);


const opts = {
    icons: {
        iconfont: 'mdiSvg',
      },
};

export default new Vuetify(opts);
