import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab: ['2', '1']
    },
    created(){
        
    },
    methods: {
        showToast1() {
            this.$toast(`<p>已完成的导随数为<strong>${parseInt(Math.random()*3000)}</strong></p>`, {
                position: 'top',
                enableHtml: true,
                closeButton: {
                    text: '关闭'
                },
                autoClose: true
            })
        },
        showToast2() {
            this.$toast(`<p>已完成的导随数为<strong>${parseInt(Math.random()*3000)}</strong></p>`, {
                position: 'middle',
                enableHtml: true,
                closeButton: {
                    text: '关闭'
                },
                autoClose: true
            })
        },
        showToast3() {
            this.$toast(`<p>已完成的导随数为<strong>${parseInt(Math.random()*3000)}</strong></p>`, {
                position: 'bottom',
                enableHtml: true,
                closeButton: {
                    text: '关闭'
                },
                autoClose: false
            })
        }
    }
})
