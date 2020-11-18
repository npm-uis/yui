<template>
    <img class="yui-log" src="./public/favicon.png" alt="Yui logo">
    <h1 class="">Welcome to Yui</h1>
    <p>The more Yui components is building, here is <span class="code">this.YToast</span> demo</p>
    <ul class="toast-ul">
        <li class="toast success" @click="toast('success')">success</li>
        <li class="toast warn" @click="toast('warn')">warn</li>
        <li class="toast danger" @click="toast('danger')">danger</li>
        <li class="toast info" @click="toast('info')">info</li>
    </ul>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'App',
        methods: {
            toast(level) {
                this.YToast[level](level);
            }
        }
    })
</script>
<style lang="scss">
    #app {
        padding: 100px 0;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        line-height: 1.7;
    }

    .yui-log {
        margin-bottom: 50px;
        width: 100px;
        height: 100px;
    }

    .code {
        color: #476582;
        padding: .25rem .5rem;
        margin: 0;
        font-size: .85em;
        background-color: rgba(27, 31, 35, .05);
        border-radius: 3px;
    }

    .toast-ul {
        margin-top: 20px;
        display: flex;
        align-content: center;
        justify-content: space-evenly;
    }

    .toast {
        list-style: none;
        text-decoration: none;

        &.success {
            color: #67c23a
        }

        &.warn {
            color: #e6a23c;
        }

        &.danger {
            color: #f56c6c;
        }

        &.info {
            color: #161618;
        }
    }
</style>
