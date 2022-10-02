import Vue from 'vue'
Vue.config.productionTip = false

Vue.config.devtools = false;
import App from './App.vue'
import Routes from './routes'
import Cryptoicon from 'vue-cryptoicon';
import icon from 'vue-cryptoicon/src/icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import VueEllipseProgress from 'vue-ellipse-progress';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import SmartTable from 'vuejs-smart-table'
import TwitterFeed from "vuejs-twitter-feed";
import TradingView from '@/components/TVChartContainer.vue'
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

import VueResizeText from 'vue-resize-text';
import Meta from "vue-meta";
Vue.use(Meta);
Vue.use(VueResizeText)
Vue.use(Flicking);

Vue.use(TwitterFeed);
Vue.use(VueRouter)
Vue.use(VueEllipseProgress);
Vue.use(SmartTable)


library.add(faHatWizard)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Cryptoicon.add(icon);
Vue.use(Cryptoicon);


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
el: '#app',
render: h => h(App),
router: router
})