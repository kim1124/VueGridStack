<template>
    <div
        class="grid-stack-item grid-stack-widget-bg"
        :id="i"
        :data-gs-x="x"
        :data-gs-y="y"
        :data-gs-id="i"
        :data-gs-width="w"
        :data-gs-height="h"
        :data-gs-locked="locked ? 'yes' : ''"
        :data-gs-no-move="!moveable ? 'yes' : ''"
        :data-gs-no-resize="!resizable ? 'yes' : ''"
        :data-gs-auto-position="autoPosition ? 'yes' : ''"
    >
        <div class="grid-stack-item-content grid-stack-widget-layout">
            <div class="grid-stack-widget-header">
                <div class="grid-stack-widget-header-title">
                    <span>위젯 타이틀</span>
                </div>
                <button
                    style="margin-right: 10px"
                    class="btn btn-warning"
                    @click="onClickLockWidget"
                >
                    {{ isLocked }}
                </button>
                <button class="btn btn-danger" @click="onClickRemoveWidget">
                    삭제
                </button>
            </div>
            <div class="grid-stack-widget-contents">
                위젯 컨텐츠
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueGridWidget',
    data() {
        return {
            lockFlag: false
        }
    },
    props: {
        i: {
            type: String,
            required: true
        },
        x: {
            type: [Number, String],
            default: 0,
            required: true
        },
        y: {
            type: [Number, String],
            default: 0,
            required: true
        },
        w: {
            type: [Number, String],
            default: 1
        },
        h: {
            type: [Number, String],
            default: 1
        },
        locked: {
            type: Boolean,
            default: false
        },
        moveable: {
            type: Boolean,
            default: true
        },
        resizable: {
            type: Boolean,
            default: true
        },
        autoPosition: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isLocked() {
            return this.lockFlag ? '해제' : '잠금'
        }
    },
    mounted() {
        // 마운트되면 레이아웃에 추가되었음을 알림
        this.$emit('added', {
            i: this.i,
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            autoPosition: this.autoPosition
        })
    },
    methods: {
        /**
         * 이름: onClickLockWidget
         * 설명: 대상 위젯을 잠근다. 잠근 상태에서는 이동할 수 없다.
         */
        onClickLockWidget() {
            this.$emit('locked', this.i, !this.lockFlag)
        },
        /**
         * 이름: onClickRemoveWidget
         * 설명: 대상 위젯을 제거한다.
         */
        onClickRemoveWidget() {
            this.$emit('removed', this.i)
        }
    }
}
</script>

<style scope>
.grid-stack-widget-layout {
    display: flex;
    padding: 0 10px 0 10px;
    flex-direction: column;

    border: 1px solid black;
    border-radius: 5px;
}

.grid-stack-widget-header {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
}

.grid-stack-widget-header-title {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
}

.grid-stack-widget-contents {
    flex: 1;
    padding: 10px 0 10px 0;
    min-height: 0;
}
</style>
