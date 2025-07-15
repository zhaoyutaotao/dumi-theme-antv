import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { Helmet, useLocation, useOutlet, useServerInsertedHTML, useSiteData } from 'dumi';
import React, { useEffect } from 'react';
import { getPurePathname } from '../utils/location';
import IndexLayout from './IndexLayout';
import ManualLayout from './ManualLayout';

import GlobalStyles from '../common/GlobalStyles';
import { defaultToken } from '../common/styles/theme';
import '../static/style';

/**
 * DocLayout 是 dumi2 的内置 layout 入口，在这里使用页面路径进行区分成自己不同的 Layout。
 */
export default () => {
  const { themeConfig, loading } = useSiteData();
  const { navs } = themeConfig;

  const outlet = useOutlet();
  const location = useLocation();
  const { pathname, hash } = location;
  const purePathname = getPurePathname(pathname);
  const [styleCache] = React.useState(() => createCache());

  // 监听 hash 变更，跳转到锚点位置
  // 同时监听页面 loading 状态，因为路由按需加载时需要等待页面渲染完毕才能找到锚点位置
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      const elm = document.getElementById(decodeURIComponent(id));
      if (elm) document.documentElement.scrollTo(0, elm.offsetTop - 80);
    }
  }, [loading, hash]);

  const content = React.useMemo<React.ReactNode>(() => {
    // 首页
    if (['/', ''].includes(purePathname)) {
      return <IndexLayout>{outlet}</IndexLayout>;
    }

    // 匹配 navs 中的 docs 路由
    const docsRoutes = navs
      .filter((nav) => nav.slug && nav.slug.startsWith('docs/'))
      .map((nav) => nav.slug && nav.slug.split('/').find((item) => item !== 'docs'));

    if (docsRoutes.some((slug) => purePathname.startsWith(`/${slug}`) || purePathname.startsWith(`/docs/${slug}`))) {
      return <ManualLayout>{outlet}</ManualLayout>;
    }

    return outlet;
  }, [purePathname]);

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: 'style',
    });
    // biome-ignore lint/security/noDangerouslySetInnerHtml: only used in .dumi
    return <style data-type="antd-cssinjs" dangerouslySetInnerHTML={{ __html: styleText }} />;
  });

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: ['cssVar', 'token'],
    });
    return (
      <style
        data-type="antd-css-var"
        data-rc-order="prepend"
        data-rc-priority="-9999"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: only used in .dumi
        dangerouslySetInnerHTML={{ __html: styleText }}
      />
    );
  });

  return (
    <>
      <Helmet>
        {/* 开发环境 dumi 配置 favicon 失效，手动添加*/}
        <link
          rel="shortcut icon"
          href="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original"
        />
      </Helmet>

      <StyleProvider cache={styleCache}>
        <ConfigProvider
          theme={{
            token: defaultToken,
            hashed: false,
          }}
        >
          <GlobalStyles />
          {content}
        </ConfigProvider>
      </StyleProvider>
    </>
  );
};
