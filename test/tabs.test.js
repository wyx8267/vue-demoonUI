const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.exist
    })
    it('接受 selected props', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="hii">
            <g-tabs-head>
                <g-tabs-item name="sii">Team SII</g-tabs-item>
                <g-tabs-item name="nii">Team NII</g-tabs-item>
                <g-tabs-item name="hii">Team HII</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="sii">重生计划</g-tabs-pane>
                <g-tabs-pane name="nii">时之卷</g-tabs-pane>
                <g-tabs-pane name="hii">橘色奇迹</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item[data-name="hii"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
})