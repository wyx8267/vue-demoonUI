<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'DemoonTabsBody',
        inject: ['eventBus'],
    }
</script>

<style lang="scss" scoped>

</style>