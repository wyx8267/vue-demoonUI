<template>
    <div style="padding-top: 16px;">
        <h2>双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>
            <g-input v-model="value"></g-input>
            <div>{{value}}</div>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Input from "../../../src/input";
export default {
    components: {
        "g-input": Input
    },
    data() {
        return {
            value: '8267',
            content: `
                data: {
                    value: '8267'
                }
                <g-input v-model="value"></g-input>
                <div>{{value}}</div>
                `
                .replace(/^ {16}/gm, '')
                .trim()
        };
    }
};
</script>

<style lang="scss" scoped>
</style>