// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import config from './config';
import axios from './util/interceptor.js'
import moment, {locale} from 'moment';


Vue.prototype.$http = axios;
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$config = config.urlConfig;
Vue.prototype.$turnUrl = "http://localhost:8080/";
Vue.prototype.$status = {};
Vue.prototype.$status.success = 0;
moment.locale('zh-cn');
Vue.prototype.moment = moment;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
