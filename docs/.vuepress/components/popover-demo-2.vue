<template>
    <div style="padding-top: 16px;">
        <h2>支持四方向</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Button from "../../../src/button";
import Popover from "../../../src/popover";
export default {
    components: {
        "g-button": Button,
        "g-popover": Popover
    },
    data() {
        return {
            content: `
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">弹出内容</template>
        </g-popover>
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