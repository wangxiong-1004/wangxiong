<template>
    <div class="scroll-wrapper">
        <div class="scroll-container" ref="scroll">
            <ul class="">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core';
// import BScroll from 'better-scroll';

export default {
    name: 'Scroll',

    components: {
    },

    methods: {
        initScroll() {
            this.scroll = new BScroll(this.$refs.scroll, {
                click: true
            });
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.initScroll();
        });
    }
};
</script>

<style scoped lang="scss">
    .scroll-wrapper {
        height: 500px;
        overflow: hidden;
        .scroll-container {
            height: 500px;
            overflow: hidden;
        }
        li {
            height: 50px;
            border: 1px solid;
        }
    }
</style>
