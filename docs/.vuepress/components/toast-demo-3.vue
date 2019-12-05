<template>
    <div style="padding-top: 16px;">
        <h2>支持HTML</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <g-button @click="onClickButton">中间弹出</g-button>
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
        <g-button @click="onClickButton">中间弹出</g-button>
        methods: {
            onClickButton() {
                this.$toast("<strong style='color:red;'>加粗的提示</strong>", {
                    enableHtml: true,
                    position: 'middle'
                });
            }
        }
                `
                .replace(/^ {8}/gm, "")
                .trim()
        };
    },
    methods: {
        onClickButton() {
            this.$toast("<strong style='color:red;'>加粗的提示</strong>", {
                enableHtml: true,
                position: 'middle'
            });
        }
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