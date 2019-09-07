<template>
    <div id="app">
        <h1>Grid Stack Plugin Example</h1>
        <div>
            Gridstack Options Area
        </div>
        <vue-grid-layout :widgets="widgets" />
    </div>
</template>

<script>
import VueGridLayout from './components/VueGridLayout'

export default {
    name: 'app',
    data() {
        return {
            widgets: [
                {
                    i: 'widget_01',
                    x: 0,
                    y: 0,
                    w: 4,
                    h: 2
                }
            ]
        }
    },
    components: {
        VueGridLayout
    }
}
</script>

<style scope></style>
