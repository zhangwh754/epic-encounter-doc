import { defineConfig } from "vitepress";
import markdownItTaskLists from "markdown-it-task-lists";

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
        text: "05-bd分享",
        link: "/05-bd分享/index.md",
        items: [
          { text: "EE-异彩秘源火法", link: "/05-bd分享/异彩秘源火法.md" },
          { text: "EE-嘲讽百夫长", link: "/05-bd分享/嘲讽百夫长.md" },
          { text: "EE-希望纯洁火电法", link: "/05-bd分享/纯洁火电法.md" },
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
      options: {
        miniSearch: {
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            fields: ["text"],
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
            processTerm: (term) => {
              // @ts-ignore
              const segmenter = Intl.Segmenter
                ? // @ts-ignore
                  new Intl.Segmenter("zh", {
                    granularity: "word",
                  })
                : null;

              if (!segmenter) return term;
              console.log("分词");

              const tokens = [];
              for (const seg of segmenter.segment(term)) {
                // @ts-ignore
                tokens.push(seg.segment);
              }
              return tokens;
            },
            /* ... */
          },
        },
      },
    },

    editLink: {
      pattern:
        "https://github.com/zhangwh754/epic-encounter-doc/edit/main/:path",
    },
  },
  base: "/epic-encounter-doc/",
  head: [
    ["link", { rel: "icon", href: "/epic-encounter-doc/favicon.ico" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=GTM-5HQ7M44R",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-5HQ7M44R');`,
    ],
  ],
  markdown: {
    config: (md) => {
      md.use(markdownItTaskLists, { enabled: true });
    },
  },
});
