# demoon-ui 一个 Vue UI 组件库

[![Build Status](https://travis-ci.org/wyx8267/vue-demoonUI.svg?branch=master)](https://travis-ci.org/wyx8267/vue-demoonUI)
## 介绍
这是我在学习 Vue 过程中做的一个 UI 框架。
## 开始使用
1. 添加 CSS 样式

    使用本框架前，请在 CSS 中开启 border-box
    ```css
    *,*::before,*::after{box-sizing:    border-box;}
    ```
    IE 8 及以上浏览器都支持此样式。

    然后需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```css
    html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```

2. 安装
    ```
    npm i --save demoon-ui
    ```

3. 引入
    ```javascript
    import {Button, ButtonGroup, Icon}from 'demoon-ui'
    import 'demoon-ui/dist/index.css'

    export default {
        name: 'app',
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    ```

## 文档
## 提问
## 变更记录
## 联系方式
## 贡献

