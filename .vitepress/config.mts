import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "史诗遭遇文档",
  description: "神界原罪2史诗遭遇攻略站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "介绍", link: "/01-介绍/EE介绍.md" },
      { text: "安装", link: "/02-安装/EE安装.md" },
    ],

    outline: {
      level: [2, 3],
    },

    sidebar: [
      {
        text: "01-介绍",
        items: [
          { text: "史诗遭遇mod介绍", link: "/01-介绍/EE介绍.md" },
          { text: "史诗遭遇附属mod介绍", link: "/01-介绍/附属mod.md" },
          {
            text: "玩EE该安装哪几个mod？",
            link: "/01-介绍/玩EE该安装哪几个mod？.md",
          },
          { text: "难度选择（必看）", link: "/01-介绍/难度.md" },
        ],
      },
      {
        text: "02-安装",
        link: "/02-安装/index.md",
        items: [
          { text: "mod安装目录", link: "/02-安装/mod安装目录.md" },
          { text: "安装EE", link: "/02-安装/EE安装.md" },
          { text: "安装插件", link: "/02-安装/插件安装.md" },
          { text: "安装Epip", link: "/02-安装/Epip安装.md" },
          { text: "安装Derpy", link: "/02-安装/Derpy安装.md" },
          { text: "mod排序", link: "/02-安装/mod排序.md" },
        ],
      },
      {
        text: "06-伟大锻造炉",
        link: "/06-伟大锻造炉/index.md",
        items: [],
      },
      {
        text: "09-技能一览",
        link: "/09-技能一览/index.md",
        items: [
          { text: "技能章节序言", link: "/09-技能一览/index.md" },
          { text: "白嫖技能", link: "/09-技能一览/白嫖技能.md" },
          { text: "叠层技能", link: "/09-技能一览/叠层技能.md" },
          { text: "破甲技能", link: "/09-技能一览/破甲技能.md" },
          { text: "注能技能", link: "/09-技能一览/注能技能.md" },
          { text: "极端减抗技能", link: "/09-技能一览/极端减抗技能.md" },
        ],
      },
      {
        text: "12-新人常见问题",
        link: "/12-新人常见问题/index.md",
        items: [
          { text: "战斗相关问题", link: "/12-新人常见问题/战斗相关问题.md" },
          {
            text: "非战斗相关问题",
            link: "/12-新人常见问题/非战斗相关问题.md",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zhangwh754/epic-encounter-doc",
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: 'https://github.com/zhangwh754/epic-encounter-doc/edit/main/:path'
    }
  },
  base: "/epic-encounter-doc/",
  head: [["link", { rel: "icon", href: "/epic-encounter-doc/favicon.ico" }]],
});
