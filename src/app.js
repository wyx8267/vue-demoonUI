import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
new Vue({
    el: '#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试
{
    //icon-name
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'set'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-set')
    button.$el.remove()
    button.$destroy()
}

{
    //loading
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'set',
            loading:true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
    button.$el.remove()
    button.$destroy()
}

{
    //order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'set'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    //order-2
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'set',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    //click   --函数mook
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData: {
            icon: 'set'
        }
    })
    gButton.$mount()
    let spy = chai.spy(function(){})
    gButton.$on('click', spy)
    let button = gButton.$el
    button.click()
    expect(spy).to.have.been.called()
    gButton.$el.remove()
    gButton.$destroy()
}