<template>
    <div class="star" :class="starType">
        <span v-for="(itemClass, index) in itemClasses" :key="index"
              :class="itemClass" class="star-item" @click="starMarkChange"></span>
    </div>
</template>

<script>
const STAR_LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
    props: {
        size: {
            type: Number,
            default: 28
        },
        score: {
            type: Number,
            default: 5
        }
    },
    computed: {
        starType() {
            return `star-${this.size}`;
        },

        itemClasses() {
            const result = [];
            const score = Math.floor(this.score * 2) / 2;
            const hasDecimal = score % 1 !== 0;
            const integer = Math.floor(score);

            for (let i = 0; i < integer; i++) {
                result.push(CLS_ON);
            }

            if (hasDecimal) {
                result.push(CLS_HALF);
            }

            while (result.length < STAR_LENGTH) {
                result.push(CLS_OFF);
            }

            return result;
        }
    },

    methods: {
        starMarkChange() {
            this.$emit('starMarkChangeName', 111);
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~@/assets/sass/mixin.scss";
    .star {
        font-size: 0;
        .star-item {
            display: inline-block;
            background-repeat: no-repeat;
        }
        &.star-28 {
            .star-item {
                width: 28px;
                height: 28px;
                margin-right: 6px;
                background-size: 28px 28px;
                background-repeat: no-repeat;
                background-position: center;
                &:last-of-type {
                    margin-right: 0;
                }
                &.on {
                    background-image: url("./star28_on.png");
                }
                &.half {
                    background-image: url("./star28_half.png");
                }
                &.off {
                    background-image: url("./star28_off.png");
                }
            }
        }
    }
</style>
