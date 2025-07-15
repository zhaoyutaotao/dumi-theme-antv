import chalk from 'chalk';
import type { IApi } from 'dumi';
import { winPath } from 'dumi/plugin-utils';
import * as path from 'path';
import { AntVReactTechStack } from './antVReactTechStack';
import deadLinkCheckerPlugin from './deadLinkChecker';
import { getExamplePaths, getExamplesPageTopics } from './examples';
import rehypeObservable from './rehypeObservable';
import remarkFeedback from './remarkFeedback';
import generateSitemap from './sitemapGenerator';

const PAGES_DIR = winPath(path.join(__dirname, '../pages'));
const MOCK_META = { frontmatter: { title: 'mock-meta' }, texts: [], toc: [] };

export default (api: IApi) => {
  api.describe({ key: `dumi-theme:${require('../../package.json').name}` });

  api.modifyDefaultConfig((memo) => {
    // use passive mode for code blocks of markdown, to avoid dumi compile theme as react component
    memo.resolve.codeBlockMode = 'passive';

    // 开启该配置后会针对每个路由单独输出 HTML 文件
    memo.exportStatic = {};

    // add exportStatic .html
    memo.exportStatic.extraRoutePaths = getExamplePaths();

    // 部署到 gh-pages 后，打开白屏，怀疑是 gzip 导致，所以换一个混淆器
    memo.jsMinifier = 'terser';

    // observable demo
    memo.extraRehypePlugins = [rehypeObservable];

    return memo;
  });

  api.modifyConfig((memo) => {
    // 配置额外的 remark 插件，用于处理 Markdown 语法树的编译
    memo.extraRemarkPlugins = memo.themeConfig.feedback ? [remarkFeedback] : [];

    return memo;
  });

  api.onGenerateFiles(() => {
    // write context provider when generate tmp file
    api.writeTmpFile({
      noPluginDir: true,
      path: 'theme-antv/ContextWrapper.tsx',
      content: `
import React from 'react';
import { useOutlet, useSiteData } from 'dumi';
import { ThemeAntVContext } from '${winPath(path.join(__dirname, '../context'))}';

export default function ThemeAntVContextWrapper() {
  const outlet = useOutlet();

  return (
    <ThemeAntVContext.Provider
      value={{
        meta: ${JSON.stringify({
          exampleTopics: getExamplesPageTopics(
            api.config.themeConfig.examples || [],
            api.userConfig.themeConfig.showAPIDoc,
          ),
        })}
      }}
    >
      {outlet}
    </ThemeAntVContext.Provider>
  );
}
      `,
    });
  });

  // wrap context for all pages
  api.addLayouts(() => ({
    id: 'theme-antv-context',
    file: `${api.paths.absTmpPath}/theme-antv/ContextWrapper.tsx`,
  }));

  // add custom pages
  api.modifyRoutes((routes) => {
    const extraRoutesList = [
      {
        id: 'dumi-theme-antv-homepage',
        absPath: '/',
        path: '',
        file: `${PAGES_DIR}/Index`,
      },
      {
        id: 'dumi-theme-antv-homepage-en',
        absPath: '/en/',
        path: 'en',
        file: `${PAGES_DIR}/Index`,
      },
      {
        id: 'dumi-theme-antv-homepage-zh',
        absPath: '/zh/',
        path: 'zh',
        file: `${PAGES_DIR}/Index`,
      },
      // Examples gallery page.
      {
        id: 'dumi-theme-antv-example-list-zh',
        absPath: '/examples',
        path: 'examples',
        file: `${PAGES_DIR}/Examples`,
      },
      {
        id: 'dumi-theme-antv-example-list-en',
        absPath: '/en/examples',
        path: 'en/examples',
        file: `${PAGES_DIR}/Examples`,
      },
      {
        id: 'dumi-theme-antv-example-list-lang',
        absPath: '/:language/examples',
        path: ':language/examples',
        file: `${PAGES_DIR}/Examples`,
      },
      // single example preview page.
      {
        id: 'dumi-theme-antv-single-example-zh',
        absPath: '/examples/:topic/:example',
        path: 'examples/:topic/:example',
        file: `${PAGES_DIR}/Example`,
      },
      {
        id: 'dumi-theme-antv-single-example-lang',
        absPath: '/:language/examples/:topic/:example',
        path: ':language/examples/:topic/:example',
        file: `${PAGES_DIR}/Example`,
      },
    ];

    extraRoutesList.forEach((itemRoute) => {
      routes[itemRoute.id] = {
        id: itemRoute.id,
        path: itemRoute.path,
        absPath: itemRoute.absPath,
        file: itemRoute.file,
        parentId: 'DocLayout',
        meta: MOCK_META,
      };
    });

    // replace default 404
    routes['404'].file = `${PAGES_DIR}/404`;

    return routes;
  });

  // watch the `examples` folder
  api.addTmpGenerateWatcherPaths(() => [path.resolve(process.cwd(), 'examples')]);

  // extends dumi internal tech stack, for customize previewer props
  api.registerTechStack(() => new AntVReactTechStack());

  // check dead links(only for production)
  const checkLinks = deadLinkCheckerPlugin(api);

  // 注册命令
  api.registerCommand({
    name: 'check-links',
    fn: async () => await checkLinks(),
  });

  // build 完成且 html 完成构建之后
  api.onBuildHtmlComplete(async () => {
    await checkLinks(() => {
      console.log(chalk.green('🚀 Build completed.'));
    });

    generateSitemap(api);
  });
};
