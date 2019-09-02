<template>
    <button class="wx-button" :class="`wx-button-${size}`" :disabled="disabled"
            @click="handleClick">
        <slot name="icon"></slot>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',

    props: {
        size: {
            validator(value) {
                return ['small', 'large', 'default'].includes(value);
            },
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        handleClick(event) {
            console.log(event);
            this.$emit('on-click', event);
        }
    }
};
</script>

<style scoped>

</style>
