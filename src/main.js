import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/";
import store from "@/store/";
import i18n from "@/i18n/";
import TemplatePage from "@/views/template/TemplatePage.vue";
import GlobalMixins from "@/mixins/mixins";

Vue.config.productionTip = process.env.NODE_ENV === 'production';
Vue.prototype.$eventHub = new Vue();

Vue.component( "TemplatePage", TemplatePage );
Vue.mixin( GlobalMixins );

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");