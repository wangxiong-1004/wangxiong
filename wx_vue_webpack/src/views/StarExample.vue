<template>
    <div>
        <star :size="48" :score="4.6"></star>

        <StarMall :score="2.5" @starMarkChangeName="starMarkChange"></StarMall>
    </div>
</template>

<script>
import star from '@/components/star/star.vue';
import StarMall from '@/components/star/star_mall/StarMall.vue';

export default {
    name: 'StarExample',

    components: {
        star,
        StarMall
    },

    methods: {
        starMarkChange(val) {
            console.log(val);
        }
    }
};
</script>

<style scoped lang="scss">

</style>
