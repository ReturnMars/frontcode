/*
 * @Author: ReturnMars
 * @Date: 2023-06-05 15:57:59
 * @LastEditors: ReturnMars
 * @LastEditTime: 2023-06-28 09:59:51
 * @Description: vitepree的配置文件
 */

export default {
  base: "/frontcode/",
  lang: "zh-CN",
  title: "前端代码规范",
  description: "前端代码规范",
  appearance: true,
  lastUpdated: true,
  lastUpdatedText: "上次更新时间",
  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "本页信息",
    search: {
      provider: "local",
    },
    footer: {
      message: "成都务本科技有限公司",
      copyright: "@author ReturnMars",
    },
    nav: [
      {
        text: "指南",
        link: "/content/命名规范/index.md",
        activeMatch: "/content/",
      },
    ],
    sidebar: {
      "/content/": [
        {
          text: "命名规范",
          collapsed: true,
          items: [
            {
              text: "介绍",
              link: "/content/命名规范/index.md",
            },
            {
              text: "目录命名规范",
              link: "/content/命名规范/目录命名规范/index.md",
            },
            {
              text: "图片命名规范",
              link: "/content/命名规范/图片命名规范/index.md",
            },
            {
              text: "HTML&CSS文件命名规范",
              link: "/content/命名规范/HTML&CSS文件命名规范/index.md",
            },
            {
              text: "Vue文件命名规范",
              link: "/content/命名规范/Vue文件命名规范/index.md",
            },
            {
              text: "ClassName命名规范",
              link: "/content/命名规范/ClassName命名规范/index.md",
            },
          ],
        },
        {
          text: "JS规范",
          collapsed: true,
          items: [
            {
              text: "语言规范",
              link: "/content/JS规范/语言规范/index.md",
            },
            {
              text: "代码规范",
              link: "/content/JS规范/代码规范/index.md",
            },
          ],
        },
        {
          text: "Vue单文件组件规范",
          collapsed: true,
          items: [
            {
              text: "格式规范",
              link: "/content/Vue单文件组件规范/格式规范/index.md",
            },
          ],
        },
        {
          text: "注释规范",
          collapsed: true,
          items: [
            {
              text: "介绍",
              link: "/content/注释规范/index.md",
            },
            {
              text: "文件注释规范",
              link: "/content/注释规范/文件注释规范/index.md",
            },
            {
              text: "普通注释规范",
              link: "/content/注释规范/普通注释规范/index.md",
            },
            {
              text: "函数注释规范",
              link: "/content/注释规范/函数注释规范/index.md",
            },
          ],
        },
        {
          text: "编写成员",
          collapsed: true,
          items: [
            {
              text: "成员列表",
              link: "/content/编写成员/index.md",
            },
          ],
        },
      ],
    },
  },
  head: [
    ["meta", { name: "build time", content: new Date().toLocaleString() }],
  ],
  vite: {
    server: {
      port: "1123",
      host: "0.0.0.0",
    },
  },
};
