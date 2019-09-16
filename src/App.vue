<template>
    <div id="app" class="grid-stack-app">
        <h1>Vue Grid Stack Example</h1>
        <div class="grid-stack-app-options">
            <h4>주요 기능</h4>
            <button class="btn btn-success" @click="onClickLayoutItems">
                레이아웃 저장
            </button>
            <button class="btn btn-primary" @click="onClickReloadLayout">
                레이아웃 새로고침
            </button>
            <button class="btn btn-info" @click="onClickAddWidget">
                위젯 추가
            </button>
            <button class="btn btn-danger" @click="onClickRemoveAllWidgets">
                위젯 전체 삭제
            </button>
        </div>
        <vue-grid-layout
            ref="layout"
            :widgets="widgets"
            @init-widgets="onInitWidgets"
            @added-widget="onAddedWidget"
            @removed-widget="onRemovedWidget"
        />
    </div>
</template>

<script>
import VueGridLayout from './components/VueGridLayout'

export default {
    name: 'app',
    data() {
        return {
            widgets: []
        }
    },
    components: {
        VueGridLayout
    },
    methods: {
        onInitWidgets() {
            console.log('위젯이 초기화 됨')
        },
        onAddedWidget(newWidget) {
            console.log('새로 추가된 위젯 > ', newWidget)
        },
        onRemovedWidget(widgetId) {
            this.widgets = this.widgets.filter(widget => widget.i !== widgetId)

            console.warn('선택된 위젯 제거됨 > ', widgetId)
        },
        onClickAddWidget() {
            // 위젯 아이디 생성
            const newId = `new_widget_id_${this.widgets.length}`

            // 모델에 추가
            this.widgets.push({
                i: newId,
                x: 0,
                y: 0,
                w: Math.floor(Math.random() * 4 + 2),
                h: 2
            })
        },
        onClickLayoutItems() {
            console.warn('현재 레이아웃 포맷 > ', this.widgets)
        },
        onClickReloadLayout() {},
        onClickRemoveAllWidgets() {
            // 모델에서 위젯 제거
            this.widgets = []

            // 레이아웃에서 위젯 초기화 요청
            this.$refs.layout.initWidgets()
        }
    }
}
</script>

<style scope>
.border {
    border: 1px solid grey;
    border-radius: 5px;
}

.grid-stack-app {
    padding: 10px;
}

.grid-stack-app-options {
    border: 1px solid grey;
    border-radius: 2px;
    margin-top: 10px;
    padding: 20px;
    margin-bottom: 10px;
}

.grid-stack-app-options button {
    margin-right: 10px;
}

.grid-stack-app-options-subcontainer {
    display: inline-block;
}

.grid-stack-app-options-subcontainer input {
    margin-right: 5px;
}
</style>
