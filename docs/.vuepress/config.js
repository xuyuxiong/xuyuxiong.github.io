module.exports = {
  lang: 'zh-CN',
  port: '8002',
  // open: true,
  title: '晨光微路个人网站',
  description: '我喜欢这晨光微露的旷野 有期待 没有幻想',
  base: '/blog/',
  serviceWorker: true,
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }],
    ["meta", { name: "description", content: "技术文章" }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    // repo: 'https://github.com/xuyuxiong/article',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        navbar: [
          { text: '首页', link: '/' },
          {
            text: '基础',
            link: '/frontend/Javascript.html'
          },
          {
            text: '框架',
            children: ['/vue/', '/react/'],
          },
          {
            text: '算法',
            link: '/algorithm/',
          },
          {
            text: '文章',
            link: '/blog/Action.html',
          },
          {
            text: '关于我',
            children: [{
              text: 'github',
              link: 'https://github.com/xuyuxiong'
            }, {
              text: '源码',
              link: 'https://github.com/xuyuxiong/blog'
            }, {
              text: '掘金首页',
              link: ''
            }],
          }
        ]
      }
    },
    sidebar: {
      '/frontend/': [
        {
          isGroup: true,
          text: '前端',
          children: [
            '/frontend/CSS.md',
            '/frontend/Javascript.md',
            '/frontend/Browser.md',
            '/frontend/Nodejs.md',
            '/frontend/Http.md'
          ],
        },
      ],
      '/vue/': [
        {
          isGroup: true,
          text: 'vue',
          children: ['/vue/NextTick.md', '/vue/KeepAlive.md'],
        },
      ],
      '/react/': [
        {
          isGroup: true,
          text: 'react',
          children: ['/react/hook.md', '/react/fiber.md'],
        },
      ],
      '/blog/': [
        {
          isGroup: true,
          text: 'blog',
          children: [
            '/blog/Action.md',
            '/blog/Cache.md',
            '/blog/NextTick.md',
            '/blog/Element-Validate.md',
            '/blog/Function.md',
            '/blog/Bit.md',
          ],
        },
      ],
    },
  },
}
