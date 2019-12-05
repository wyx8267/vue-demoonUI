<template>
    <div style="padding-top: 16px;">
        <h2>弹出位置</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
            <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
            <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
        </div>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import plugin from "../../../src/plugin";
import Button from "../../../src/button";
import Vue from "vue";
Vue.use(plugin);
export default {
    components: {
        "g-button": Button
    },
    data() {
        return {
            selected: "1",
            content: `
        .demoonToast{
            z-index: 30 !important;
        }
        <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
                `
                .replace(/^ {8}/gm, "")
                .trim()
        };
    }
};
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
</style>
<style>
.demoonToast {
    z-index: 30 !important;
}
</style>