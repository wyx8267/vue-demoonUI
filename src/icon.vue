<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"/>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name:'DemoonIcon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .icon {
            width: 1em;
            height: 1em;
            fill: currentColor;
            overflow: hidden;
        }
</style>