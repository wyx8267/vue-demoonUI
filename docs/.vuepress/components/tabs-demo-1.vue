<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-tabs :selected.sync="selected">
            <g-tabs-head>
                <g-tabs-item name="1">标签 1</g-tabs-item>
                <g-tabs-item name="2">标签 2</g-tabs-item>
                <g-tabs-item name="3" disabled>标签 3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容 1</g-tabs-pane>
                <g-tabs-pane name="2">内容 2</g-tabs-pane>
                <g-tabs-pane name="3">内容 3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsBody from "../../../src/tabs-body";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
export default {
    components: {
        "g-tabs": Tabs,
        "g-tabs-body": TabsBody,
        "g-tabs-head": TabsHead,
        "g-tabs-item": TabsItem,
        "g-tabs-pane": TabsPane,
    },
    data() {
        return {
            selected: '1',
            content: `
        data:{
            selected: '1'
        }
        <g-tabs :selected.sync="selected">
            <g-tabs-head>
                <g-tabs-item name="1">标签 1</g-tabs-item>
                <g-tabs-item name="2">标签 2</g-tabs-item>
                <g-tabs-item name="3" disabled>标签 3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容 1</g-tabs-pane>
                <g-tabs-pane name="2">内容 2</g-tabs-pane>
                <g-tabs-pane name="3">内容 3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
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