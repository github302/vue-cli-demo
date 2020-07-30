<template>
    <!-- <svg :class="`icon ${className}`" aria-hidden="true" :width="width" :height="height">
        <use :xlink:href="`#bt-icon-${id}`"></use>
    </svg> -->
    <div></div>
</template>
<style lang="sass" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
        }
    }   
}
</script>