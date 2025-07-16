---
title: Config
order: 0
---

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

## logo

- 类型：`string | false`
- 默认值：`antv 的 LOGO`

配置导航栏上的站点 LOGO，如果需要配置为本地图片文件，可将图片资源放入 public 文件夹，例如放置 public/logo.png，则配置 /logo.png 即可。

配置为 false 时不展示 LOGO。

## title

- 类型：`string`
- 默认值：`undefined`

配置导航栏上的站点名称，不配置时不展示。

## footer

- 类型：`string | false`
- 默认值：`Powered by dumi`

配置页脚内容，可以是 HTML，配置 false 时不展示。

## footerLinks

- 类型：FooterColumn[] | Record<string, FooterColumn[]>
- 默认值：null

FooterColumn 为 rc-footer 组件 columns 属性 type 值，[点击查看详情](https://react-component.github.io/footer/#column)。
