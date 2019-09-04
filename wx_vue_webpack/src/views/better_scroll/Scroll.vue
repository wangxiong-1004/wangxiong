<template>
    <div class="scroll-wrapper">
        <div class="" ref="scroll"></div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
    name: 'Scroll',

    components: {
    },

    method: {
        _initScroll() {
            this.scroll = new BScroll(this.$ref.scroll);
        }
    },

    created: {

    }
};
</script>

<style scoped lang="scss">

</style>
