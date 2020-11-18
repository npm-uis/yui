<template>
    <div
        class="y-switch"
        :style="{backgroundColor:value ? activeColor:inactiveColor}"
        @click.stop="switchValue"
    >
        <span class="y-switch-slider" :class="[value ? 'y-switch-slider-active': 'y-switch-slider-inactive']"></span>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'YSwitch',
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            // status
            value: {
                type: Boolean,
                default: true
            },
            // active color when status true
            activeColor: {
                type: String,
                default: '#409eff'
            },
            // inactive color when status false
            inactiveColor: {
                type: String,
                default: '#c0ccda'
            }
        },
        data() {
            return {
                index: 123
            }
        },
        methods: {
            switchValue() {
                this.value = !this.value;
                this.handleChange();
            },
            handleChange() {
                this.$emit('change', this.value);
                this.$emit('input', this.value);
            }
        }
    });
</script>
<style lang="scss" scoped>
    @import "./index.scss";
</style>
