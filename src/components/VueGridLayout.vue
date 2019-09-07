<template>
    <div
        ref="layout"
        class="grid-stack grid-stack-layout-bg"
        :data-gs-width="col"
        :data-gs-height="row"
    >
        <widget
            v-for="widget in widgets"
            :x="widget.x"
            :y="widget.y"
            :i="widget.i"
            :w="widget.w"
            :h="widget.h"
            :key="widget.i"
            :locked="widget.lock"
            :moveable="widget.move"
            :resizable="widget.resize"
            :auto-position="widget.position"
        />
    </div>
</template>

<script>
// 그리드 스택 유틸
import { createLayout } from '../libs/gridstack/gridstack.util'

// 위젯 정보
import VueGridWidget from './VueGridWidget'

export default {
    name: 'VueGridLayout',
    components: {
        widget: VueGridWidget
    },
    data() {
        return {}
    },
    props: {
        col: {
            type: Number,
            default: 12
        },
        row: {
            type: Number
        },
        widgets: {
            type: Array,
            default: () => []
        },
        animation: {
            type: Boolean,
            default: false
        }
    },
    watch: {},
    created() {
        console.warn('그리드 레이아웃 생산됨')
    },
    mounted() {
        // 레이아웃을 GridStack 객체로 생성
        createLayout(this.$refs.layout)
        console.warn('그리드 레이아웃 마운트')
    },
    beforeDestroy() {}
}
</script>

<style scope>
.grid-stack-layout-bg {
    height: 500px;
    background-color: orange;
}
</style>
