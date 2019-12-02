module.exports = {
    title: 'Demoon UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '源代码', link: '' },
        ],
        sidebar: [
            {
                title: '入门',
                children: ['/install/','/get-started/']
            },
            {
                title:'组件',
                children: ['/components/button']
            }
        ]
    }
}