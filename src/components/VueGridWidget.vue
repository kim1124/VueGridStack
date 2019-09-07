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
        <div class="grid-stack-item-content grid-stack-widget-content-bg">
            <h1>Grid Stack Widget Content</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueGridWidget',
    data() {
        return {}
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
    computed: {}
}
</script>

<style scope>
.grid-stack-widget-bg {
    background-color: skyblue;
}

.grid-stack-widget-content-bg {
    background-color: green;
}
</style>
