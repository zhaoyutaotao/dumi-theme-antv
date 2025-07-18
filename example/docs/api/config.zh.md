---
title: 配置
order: 0
---

## 框架配置

参考 [dumi 配置](https://d.umijs.org/config)。

## 主题配置

```javascript
// .dumirc.ts
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    // 主题配置项均放置在这一层
  },
});
```

### announcement

- 类型：`{icon:string,title:{zh:string},link:{text:{zh:string},url:string}}`
- 默认值：`undefined`

页面头部最上边的公告

```js
{
  announcement: {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: {
        zh: '语雀公益计划：大学生认证教育邮箱，即可免费获得语雀会员。语雀，支付宝匠心打造的在线文档平台',
        en: '语雀公益计划：大学生认证教育邮箱，即可免费获得语雀会员。语雀，支付宝匠心打造的在线文档平台',
      },
      link: {
        text: {
          zh: '更多内容',
          en: 'more',
        },
        url: 'https://www.yuque.com/yuque/blog/welfare-edu?source=antv',
      },
    },
}
```

### logo

- 类型：`string | false`
- 默认值：`antv 的 LOGO`

配置导航栏上的站点 LOGO，如果需要配置为本地图片文件，可将图片资源放入 public 文件夹，例如放置 public/logo.png，则配置 /logo.png 即可。

配置为 false 时不展示 LOGO。

### title

- 类型：`string`
- 默认值：`undefined`

配置导航栏上的站点名称，不配置时不展示。

### navs

- 类型：`{ title: {zh: string}, slug: string}[]`
- 默认值：`[]`

```js
{
  navs: [
    // 头部的菜单列表
    {
      slug: 'docs/manual',
      title: {
        zh: '教程',
        en: 'Tutorials',
      },
    },
    {
      slug: 'docs/api',
      title: {
        zh: 'API',
        en: 'API',
      },
    },
    {
      slug: 'docs/plots',
      title: {
        zh: '组件',
        en: 'Components',
      },
    },
    {
      slug: 'examples',
      title: {
        zh: '图表示例',
        en: 'Examples',
      },
    },
    {
      title: {
        zh: '相关资源',
        en: 'Related resource',
      },
      dropdownItems: [
        {
          name: {
            zh: 'Dumi 2.x',
            en: 'Dumi 2.x',
          },
          url: 'https://github.com/umijs/dumi',
        },
      ],
    },
  ];
}
```

### docs

- 类型：`{ slug: string, title: {zh:string} ,order:number}[]`
- 默认值：`[]`

配置导航栏`navs`上的导航项，对应 `docs` 文件夹下的文件。

```js
{
   docs: [
      {
        slug: 'manual/concepts',
        title: {
          zh: '可视化基础概念',
          en: 'Visualization Concepts',
        },
        order: 2,
      },
      {
        slug: 'manual/concepts/geometry',
        title: {
          zh: '几何图形',
          en: 'Geometry',
        },
        order: 2,
      },
      {
        slug: 'api/advanced',
        title: {
          zh: '高级进阶功能',
          en: 'Advanced Chart Features',
        },
        order: 1,
      },
      {
        slug: 'api/shape',
        title: {
          zh: '绘图属性速查',
          en: 'Quick Reference for Plotting Properties',
        },
        order: 2,
      },
    ],
}
```

### examples

- 类型：`{ id: string, title: {zh:string}, icon: string}[]`
- 默认值：`[]`

配置导航栏`navs` 上的导航项，对应 `examples` 文件夹下的文件。

```js
{
   examples: [
      {
        id: 'case',
        title: {
          zh: '场景案例',
          en: 'Show Case',
        },
        icon: 'gallery',
      },
    ],
}
```

### ecosystems

- 类型：`{ name: {zh:string}, url: string}[]`
- 默认值：`[]`

header 菜单中的「周边生态」

```js
{
   ecosystems: [
      {
        name: {
          zh: 'G2 官网',
          en: 'G2 website',
        },
        url: 'https://g2.antv.vision',
      },
      {
        name: {
          zh: 'G6 官网',
          en: 'G6 website',
        },
        url: 'https://g6.antv.vision',
      },
    ],
}

```

### detail

- 类型：`{ engine: {zh:string}, title: {zh:string}, description: {zh:string}, image: string, buttons: {text: {zh:string}, link: string}[]}`
- 默认值：`undefined`

首页项目介绍，配置后会展示在首页。

```js
{
  detail: {
      engine: {
        zh: 'dumi-theme-antv',
        en: 'dumi-theme-antv',
      },
      title: {
        zh: 'dumi-theme-antv·主题包',
        en: 'dumi-theme-antv·Theme Pack',
      },
      description: {
        zh: 'AntV 官网风格类似的 dumi2 主题插件',
        en: 'dumi2 theme similar to antdV website',
      },
      image: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*wo_LToatmbwAAAAAAAAAAABkARQnAQ',
      buttons: [
        {
          text: {
            zh: '开始使用',
            en: 'Getting Started',
          },
          link: '/manual/quickstart',
        },
        {
          text: {
            zh: '图表示例',
            en: 'Playground',
          },
          type: 'primary',
          link: '/examples',
        },
      ],
    },
}
```

### news

- 类型：`{ type: {zh:string}, title: {zh:string}, date: string, link: string,subTitle:{zh:string},img:string}[]`
- 默认值：`undefined`

首页新闻公告，配置后会展示在首页。

```js
{
  news: [
    {
      type: {
        zh: '论坛',
        en: 'Forum',
      },
      title: {
        zh: 'AntV 芒种日 图新物：GraphInsight 发布',
        en: 'AntV Seeds Day Graph New: GraphInsight Released',
      },
      date: '2022.06.06',
      link: 'https://github.com/antvis/GraphInsight',
    },
    {
      type: {
        zh: '论坛',
        en: 'Forum',
      },
      title: {
        zh: 'SEE Conf 2022 支付宝体验科技大会',
        en: 'SEE Conf 2022 Alipay Experience Technology Conference',
      },
      date: '2022.01.08',
      link: 'https://seeconf.antfin.com/',
    },
  ];
}
```

### features

- 类型：`{ title: {zh:string}, cards: {icon: string, title: {zh:string}, description: {zh:string}}[]}`
- 默认值：`undefined`

首页特性介绍，配置后会展示在首页。

```js
{
    features: {
      title: {
        zh: '我们的优势',
        en: 'Our advantage',
      },
      cards: [
        {
          icon: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*4x_KTKyqwJgAAAAAAAAAAABkARQnAQ',
          title: {
            zh: '千变万化，自由组合',
            en: 'The ever-changing, free combination',
          },
          description: {
            zh: '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意',
            en: 'Any chart can be drawn flexibly based on graphic syntax to satisfy your unlimited creativity',
          },
        },
        {
          icon: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',
          title: {
            zh: '专业完备',
            en: 'Professional complete',
          },
          description: {
            zh: '大量产品实践之上，提供绘图引擎、完备图形语法、专业设计规范',
            en: 'On top of a large number of product practices, it provides a drawing engine, a complete graphics grammar, and professional design rules',
          },
        },
        {
          icon: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_riSQZrgczgAAAAAAAAAAABkARQnAQ',
          title: {
            zh: '生动，可交互',
            en: 'Vivid, interactive',
          },
          description: {
            zh: '强大的交互语法，助力可视分析，让图表栩栩如生',
            en: 'owerful interactive syntax to help visual analysis and make charts come alive',
          },
        },
      ],
    }
}
```

### cases

- 类型：`{ logo: string, title: {zh:string}, description: {zh:string},link: string,image: string }[]`
- 默认值：`undefined`

首页场景案例，配置后会展示在首页。

```js
{
  cases: [
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*-dLnTIexOxwAAAAAAAAAAABkARQnAQ',
      title: {
        zh: '精品 Gallery',
        en: 'Boutique Gallery',
      },
      description: {
        zh: '真实的数据可视化案例，我们将它们归纳为一个个故事性的设计模板，让用户达到开箱即用的效果。',
        en: 'Real data visualization cases, we summarize them into story-based design templates, allowing users to achieve out-of-the-box effects.',
      },
      // link: `/examples/gallery`,
      image: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*hDrgRb7ma4EAAAAAAAAAAABkARQnAQ',
    },
  ];
}
```

### companies

- 类型：`{ name: string, img: string }[]`
- 默认值：`undefined`

首页合作公司介绍，配置后会展示在首页。

```js
{
   companies: [
      {
        name: '阿里云',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*V_xMRIvw2iwAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '支付宝',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*lYDrRZvcvD4AAAAAAAAAAABkARQnAQ',
      },
      {
        name: '天猫',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '淘宝网',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*1l8-TqUr7UcAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '网上银行',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ZAKFQJ5Bz4MAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '京东',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*yh-HRr3hCpgAAAAAAAAAAABkARQnAQ',
      },
      {
        name: 'yunos',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_js7SaNosUwAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '菜鸟',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*TgV-RZDODJIAAAAAAAAAAABkARQnAQ',
      },
    ],
}
```

### footer

- 类型：`string | false`
- 默认值：`Powered by dumi`

配置页脚内容，可以是 HTML，配置 false 时不展示。

### footerLinks

- 类型：`FooterColumn[] | Record<string, FooterColumn[]>`
- 默认值：`undefined`

配置页脚链接，配置后会展示在页脚。

FooterColumn 为 rc-footer 组件 columns 属性 type 值，[点击查看详情](https://react-component.github.io/footer/#column)。对 `columns` `icon` 字段进类型行了修改，只支持配置图片地址。

```js
{
   footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'Ant Design Pro',
            url: 'https://pro.ant.design/',
            openExternal: true,
          },
          {
            title: 'Ant Design Mobile',
            url: 'https://mobile.ant.design/',
            openExternal: true,
          },
          {
            title: 'Kitchen',
            url: 'https://kitchen.alipay.com/',
            description: 'Sketch 工具集',
          },
        ],
      },
      {
        title: '社区',
        items: [
          {
            title: 'Ant Design Pro',
            url: 'https://pro.ant.design/',
            openExternal: true,
          },
          {
            title: 'Ant Design Mobile',
            url: 'https://mobile.ant.design/',
            openExternal: true,
          },
          {
            title: 'Kitchen',
            url: 'https://kitchen.alipay.com/',
            description: 'Sketch 工具集',
          },
        ],
      },
      {
        title: '帮助',
        items: [
          {
            title: 'Ant Design Pro',
            url: 'https://pro.ant.design/',
            openExternal: true,
          },
          {
            title: 'Ant Design Mobile',
            url: 'https://mobile.ant.design/',
            openExternal: true,
          },
          {
            title: 'Kitchen',
            url: 'https://kitchen.alipay.com/',
            description: 'Sketch 工具集',
          },
        ],
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: '更多产品',
        items: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            url: 'https://yuque.com',
            description: '知识创作与分享工具',
            openExternal: true,
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png',
            title: '云凤蝶',
            url: 'https://yunfengdie.com',
            description: '中台建站平台',
            openExternal: true,
          },
        ],
      },
    ],
}
```
