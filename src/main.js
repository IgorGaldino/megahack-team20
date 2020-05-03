import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFormWizard from 'vue-form-wizard'
import VueTheMask from 'vue-the-mask'

import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFormWizard)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app')
