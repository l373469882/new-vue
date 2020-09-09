import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyFooter from './components/MyFooter.vue'
import Axios from 'axios'
import ListItem from './components/ListItem.vue'

Vue.config.productionTip = false
Vue.component('MyFooter', MyFooter)
Vue.prototype.$http = Axios
Vue.component('ListItem', ListItem)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')