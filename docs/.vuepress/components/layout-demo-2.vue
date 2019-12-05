<template>
    <div style="padding-top: 16px;">
        <h2>布局2</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-layout style="color: white; margin-bottom:50px; overflow: hidden;">
            <g-header style="height: 50px; background: lightskyblue;">header</g-header>
            <g-layout>
                <g-sider style="height: 100px; background: #ada; width:150px;">sider</g-sider>
                <g-content style="height: 100px; background: deepskyblue;">content</g-content>
            </g-layout>
            <g-footer style="height: 50px; background: lightskyblue;">footer</g-footer>
        </g-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
export default {
    components: {
        "g-layout": Layout,
        "g-header": Header,
        "g-footer": Footer,
        "g-content": Content,
        "g-sider": Sider
    },
    data() {
        return {
            content: `
            <g-layout style="color: white; margin-bottom:50px; overflow: hidden;">
            <g-header style="height: 50px; background: lightskyblue;">header</g-header>
            <g-layout>
                <g-sider style="height: 100px; background: #ada; width:150px;">sider</g-sider>
                <g-content style="height: 100px; background: deepskyblue;">content</g-content>
            </g-layout>
            <g-footer style="height: 50px; background: lightskyblue;">footer</g-footer>
        </g-layout>
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