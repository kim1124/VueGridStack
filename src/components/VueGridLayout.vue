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
            :id="widget.i"
            :key="widget.i"
            :locked="widget.lock"
            :moveable="widget.move"
            :resizable="widget.resize"
            :auto-position="widget.position"
            @added="onAddedWidget"
            @locked="onLockedWidget"
            @removed="onRemoveWidget"
        />
    </div>
</template>

<script>
// 그리드 스택 유틸
import {
    addWidget,
    initWidgets,
    removeWidget,
    lockedWidget,
    createLayout
} from '../libs/gridstack/gridstack.util'

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
        },
        addedWidgetHandler: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        getLayoutEl() {
            return this.$refs.layout
        }
    },
    watch: {},
    created() {},
    mounted() {
        // 레이아웃을 GridStack 객체로 생성
        createLayout(this.getLayoutEl)
    },
    beforeDestroy() {},
    methods: {
        /**
         * 이름: initWidgets
         * 설명: 추가된 모든 위젯을 제거한다. 모델 초기화는 레이아웃에서 진행하지 않는다.
         */
        initWidgets() {
            // GridStack 위젯 초기화
            initWidgets(this.getLayoutEl)

            // 위젯 초기화 이벤트 알림
            this.$emit('init-widgets')
        },
        /**
         * 이름: onAddedWidget
         * 설명: 위젯이 추가되어 DOM에 마운트되면 자동으로 GridStack 객체로 초기화하고 부모 컴포넌트에 이벤트를 발생시킨다.
         */
        onAddedWidget(newWidget) {
            // 새로운 위젯 요소
            const widgetDom = document.getElementById(newWidget.i)

            // GridStack 객체로 생성
            addWidget(
                this.$refs.layout,
                widgetDom,
                newWidget.x,
                newWidget.y,
                newWidget.w,
                newWidget.h,
                true
            )

            // 위젯 추가됨 알림
            this.$emit('added-widget', {
                i: newWidget.i,
                x: newWidget.x,
                y: newWidget.y,
                w: newWidget.w,
                h: newWidget.h,
                autoPosition: newWidget.autoPosition
            })
        },
        /**
         * 이름: onRemoveWidget
         * 설명: 대상 위젯을 삭제한다.
         */
        onRemoveWidget(widgetId) {
            // DOM에서 ID로 위젯 DOM 찾기
            const targetWidget = document.getElementById(widgetId)

            // GridStack 객체 제거
            removeWidget(this.getLayoutEl, targetWidget)

            // 모델에서 제거 요청
            this.$emit('removed-widget', widgetId)
        },
        onLockedWidget(widgetId, lockFlag = false) {
            // DOM에서 ID로 위젯 DOM 찾기
            const targetWidget = document.getElementById(widgetId)

            // 위젯 잠금
            lockedWidget(this.getLayoutEl, targetWidget, lockFlag)
        }
    }
}
</script>

<style scope>
.grid-stack-layout-bg {
    background-color: orange;
}
</style>
