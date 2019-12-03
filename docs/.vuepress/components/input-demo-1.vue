<template>
    <div style="padding-top: 16px;">
        <h2>简单做法</h2>
        <p>
            <strong>预览</strong>
        </p>
            <g-input value="孙三"></g-input>
            <br>
            <g-input value="冯硕" disabled></g-input>
            <br>
            <g-input value="戴门" readonly></g-input>
            <br>
            <g-input value="吴" error="姓名不能少于两个字"></g-input>
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
            content: `
                <g-input value="孙三"></g-input>
                <g-input value="冯硕" disabled></g-input>
                <g-input value="戴门" readonly></g-input>
                <g-input value="吴" error="姓名不能少于两个字"></g-input>
                `
                .replace(/^ {16}/gm, '')
                .trim()
        };
    }
};
</script>

<style lang="scss" scoped>
</style>