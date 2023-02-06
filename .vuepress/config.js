module.exports = {
  "title": "guoguo_Note",
  "description": "guoguo_info",
  "dest": "public",
  "base": "/mynotes/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "displayAllHeaders": "true",
    "nav": [{
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [{
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          },
          {
            "text": "my-Note",
            "link": "/docs/my-note/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [{
          "text": "GitHub",
          "link": "https://github.com/shixindea",
          "icon": "reco-github"
        }]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/my-note/": [
        "",
        "plg",
        "theme"
      ]
    },
    // sidebar: [
    //   {
    //     title: 'Group 1',   // 必要的
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [ /* ... */],
    //     initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    //   }
    // ],

    // {
    //   // 必要的，分组的标题文字
    //   title: "Group 1",
    //   // 可选的, 分组标题对应的图标
    //   icon: "bar",
    //   // 可选的, 分组标题对应的链接
    //   path: "/docs/",
    //   // 可选的，会添加到每个 item 链接地址之前
    //   prefix: "/theme-reco/",
    //   // 可选的, 设置分组是否可以折叠，默认值是 true,
    //   collapsable: true,
    //   // 可选的, 嵌套渲染深度，默认值是 2
    //   sidebarDepth: 2,
    //   // 必要的，分组的子项目
    //   children: [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ],
    // },
    // {
    //   // 必要的，分组的标题文字
    //   title: "Group 1",
    //   // 可选的, 分组标题对应的图标
    //   icon: "bar",
    //   // 可选的, 分组标题对应的链接
    //   path: "/docs/",
    //   // 可选的，会添加到每个 item 链接地址之前
    //   prefix: "/my-note/",
    //   // 可选的, 设置分组是否可以折叠，默认值是 true,
    //   collapsable: false,
    //   // 可选的, 嵌套渲染深度，默认值是 2
    //   sidebarDepth: 2,
    //   // 必要的，分组的子项目
    //   children: [
    //     "",
    //     "plg",
    //     "theme"
    //   ],
    // }
    // ],


    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [{
        "title": "果锅家上宾",
        "desc": "这个是一个友联，在这里可以加入我的朋友们的网址哦.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "果锅的博客(two)",
        "desc": "这个是果锅的GitHub笔记网址，也是一个很不错的博客哦，里面还有一些花里胡哨的小东西",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://shixindea.github.io/"
      },
      {
        "title": "大佬的书签",
        "desc": "来自一位大佬的书签",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://it-cxy.top/"
      }, {
        "title": "果锅的书签",
        "desc": "来自自己多年来积累的书签",
        "avatar": "/avatar.png",
        "link": "https://xindezi.gitee.io/mybooks/"
      }
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Guoguo",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}
