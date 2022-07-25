const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { prismjsPlugin } = require('@vuepress/plugin-prismjs')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon')

module.exports = {
    // 站点语言
    lang: 'zh-CN',
    //站点标题
    title: 'Lodash学习！',
    // 部署站点的基础路径
    base:'/lodash_/',
    description: '我的lodash学习文档',
    // 渲染在 HTML 的 <head> 标签内加入的额外标签
    head: [
        //站点favicon,图片资源在publi下
        // https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6
        ['link', { rel: 'icon', href: '/images/logo/lodash.ico' }],
        //重定向
        [
          'script', {}, `
          (function() {
 
          })();
          `
        ]
    ],
    debug: true,
    //默认主题
    theme: defaultTheme({
        // 导航栏中 Logo 的链接 
        home:'/post/synopsis.md',
        logo:'../images/logo/logo.png',
        //首部导航栏
        navbar: [
          // 嵌套 Group - 最大深度为 2
          {
            text: '其他资源',
            children: [
              {
                text: 'SubGroup',
                children: ['/group/sub/foo.md', '/group/sub/bar.md','/group/sub/bar.md','/group/sub/bar.md','/group/sub/bar.md',],
              },
            ],
          },
          {
            text: 'lodash中文文档',
            link: 'https://www.lodashjs.com/'
          },
          {
            text: 'Moon的小窝',
            link: 'https://wfppfw.github.io/myVuePress/'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/wfppfw'
          },
        ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏，文档目录结构。
    sidebar: {
      '/post/':[
        // '/post/test/3.md synopsis',
        {
          text: '简介',
          // link:''
          link: '/post/synopsis.md'
          // children:['/post/array_/chunk.md']
        },
        {
          text: '数组',
          collapsible: true,
          children: [
            {
              text: '_.chunk',
              link: '/post/array_/chunk.md'
              // children:['/post/array_/chunk.md']
            },
            {
              text: '_.compact',
              link: '/post/array_/compact.md'
              // children:['/post/array_/chunk.md']
            },
            {
              text: '_.concat',
              link: '/post/array_/concat.md'
              // children:['/post/array_/chunk.md']
            },

            // '/post/array_/chunk.md'
          ]
        },
        {
          text: '集合',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: '函数',
          collapsible: true,
          children: [
            {
              text: '_.once',
              link: '/post/function_/once.md'
            },
          ]
        },
        {
          text: '语言',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: '数学',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: '对象',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: 'Seq',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: '字符串',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: '实用函数',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: 'Properties',
          collapsible: true,
          children: ['/demo2/22.md']
        },
        {
          text: 'Methods',
          collapsible: true,
          children: ['/demo2/22.md']
        }
      ],

      // '/demo2/':[
      //   // '/demo2/22.md'
      //   {
      //     text: 'Guide2',
      //     children: ['/demo2/22.md']
      //   }
      // ]

      // '/post/test/1.md',

      // '/post/test/':[{

      
      //   title: 'Group1',
      //   children:['/post/test/1.md','/post/test/2.md']
      // }
      // ],
      // '/post/test2/':[
      //   {

      
      //     title: 'Group2',
      //     children:['/post/test2/9.md','/post/test2/8.md']
      //   }
      // ]
        // SidebarItem
        // {
        //   text: '介绍',
        //   link: '/',
        //   collapsable: true, // 不折叠
        //   children: [
        //     // SidebarItem
        //     {
        //       text: 'github',
           
        //       link: 'https://github.com',
        //       children: ['/post/test/1.md','/post/test/1.md'],
        //     },
        //     // 字符串 - 页面文件路径
        //     {
        //         text: 'github',
               
        //         link: '/post/test/1.md',
        //         children: ['/post/test/1.md','/post/test/1.md'], 
        //     },
        //     {
        //         text: 'github',
                
        //         link: '/post/test/1.md',
        //         children: ['/post/test/1.md','/post/test/1.md'], 
        //     },
        //     {
        //         text: 'github',

        //         link: '/post/test/1.md',
        //         children: ['/post/test/1.md','/post/test/1.md'], 
        //     }
        //   ],
        // },
        // // 字符串 - 页面文件路径
        // // '/bar/README.md',
        // {
        //     text: '数组',
        //     link: '/',
        //     collapsable: true, // 不折叠
        // },
        // '/post/test/3.md',
        // // '/post/test/1.md',
        // '/post/test/2.md'
    },

      }),
      //footer
      // footer: `
      // &copy; <a href="https://github.com/wfppfw" target="_blank">Moon</a> 2022-?
      // <br>
      // Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> 

      // `,
      //插件配置
      plugins: [
        //本地搜索
        // searchPlugin({
        //   // 配置项
        // }),
        //
        docsearchPlugin({
            // 配置项
        }),
        //图片放大
        mediumZoomPlugin({
            // 配置项
        }),

          //外链添加图标
        externalLinkIconPlugin({
            // 配置项
        }),
      ],
  }