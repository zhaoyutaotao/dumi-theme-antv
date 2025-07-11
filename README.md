# dumi-theme-antv

[![NPM version](https://img.shields.io/npm/v/dumi-theme-antv.svg?style=flat)](https://npmjs.org/package/dumi-theme-antv) [![NPM downloads](http://img.shields.io/npm/dm/dumi-theme-antv.svg?style=flat)](https://npmjs.org/package/dumi-theme-antv)

此项目是 [@antv/dumi-theme-antv](https://npmjs.org/package/@antv/dumi-theme-antv) 的 Fork 版本，原库部分内容无法修改或替换。

这是一个适用于 [dumi](https://next.d.umijs.org) 框架的主题包。

## 使用方法

将此主题安装为开发依赖：

```bash
$ npm i dumi-theme-antv -D
```

在 dumi 配置文件 `.dumirc.ts` 中进行配置：

```ts
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    ...
  },
});
```

配置完成后，执行 `dumi dev` 即可使用此主题。

## 配置选项

`themeConfig.docsearchOptions.sort` 用于配置搜索结果的排序规则。可以通过字符串数组来定义排序逻辑：

- 每个字符串可以是一个路径片段，用于匹配搜索结果的链接
- 如果字符串以 `!` 开头，则表示不包含该路径片段的结果应排在包含该路径片段的结果之前

其他配置选项待补充

## 开发指南

```bash
$ npm install
```

依赖安装完成后，会自动创建从 `example/.dumi/theme` 到 `../../src` 的符号链接，使 dumi 将本主题作为本地主题加载，因此可以直接启动示例项目，支持热更新(HMR)：

```bash
#切换到示例目录
$ cd example

#安装示例项目依赖
npm install

#启动开发服务器预览
npm run dev
```

dumi主题开发文档: https://next.d.umijs.org/theme

## LICENSE

MIT 许可证
