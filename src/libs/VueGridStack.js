/**
 * 이름: VueGridStack.js
 * 설명: 뷰-그리드-스택을 Vue 프로젝트에서 쉽게 사용할 수 있도록 플러그인으로 처리한다.
 */

import './gridstack'
import VueGridLayout from '../components/VueGridLayout'

export default {
    install(Vue, options) {
        Vue.component('vue-grid-stack', VueGridLayout)
    }
}
