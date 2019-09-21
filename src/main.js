import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// 플러그인 테스트
import VueGridStack from './libs/VueGridStack'

// 플러그인 등록
Vue.use(VueGridStack)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
