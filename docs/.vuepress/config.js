module.exports = {
    title: 'Demoon UI',
    description: '一个好用的UI框架',
    base: '/vue-demoonUI/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '源代码', link: 'https://github.com/wyx8267/vue-demoonUI' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/']
            },
            {
                title:'组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',
                ]
            }
        ]
    }
}