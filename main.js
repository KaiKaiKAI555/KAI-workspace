import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

import uniIcon from "@/components/uni-icons/uni-icons.vue"
Vue.component('uniIcon',uniIcon)

const app = new Vue({
    ...App
})
app.$mount()
