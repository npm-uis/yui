<template>
    <div
        class="y-switch"
        :style="{backgroundColor:value ? activeColor:inactiveColor}"
        @click.stop="switchValue"
    >
        <span class="y-switch-slider" :class="[value ? 'y-switch-slider-active': 'y-switch-slider-inactive']"></span>
    </div>
</template>
<script>
    import Switch from './js/index';

    export default Switch;
</script>
<style lang="scss" scoped>
    @import "./css/index.scss";
</style>
