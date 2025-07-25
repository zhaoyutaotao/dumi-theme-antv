import { SearchOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { useIntl, useSiteData, useSiteSearch } from 'dumi';
import React, { useEffect, useMemo, useState } from 'react';
import { getSearchResults } from './helper';
import styles from './index.module.less';
import { SearchResult } from './SearchResult';

export const Search = () => {
  const intl = useIntl();
  const [open, setOpen] = useState<boolean>(false);
  const { themeConfig } = useSiteData();
  const { docsearchOptions: { sort } = {} } = themeConfig;

  // useSiteSearch 错误 keywords 为空时 loading 为 true
  const { keywords, setKeywords, result, loading } = useSiteSearch();

  useEffect(() => {
    // keywords 为空 或 loading 为 false 查找结束， 进行开关
    if (!keywords || !loading) {
      setOpen(!!keywords);
    }
  }, [keywords, loading]);

  useEffect(() => {
    const close = (e: any) => {
      const className = e.target?.className;
      if (!(typeof className === 'string' && className.match(styles.input))) {
        setOpen(false);
      }
    };
    if (window) {
      window.addEventListener('click', close);
    }
    return () => {
      window.removeEventListener('click', close);
    };
  }, []);

  const searchResults = useMemo(() => getSearchResults(result, 30, sort), [result]);

  return (
    <Popover
      open={open}
      placement="topLeft"
      destroyOnHidden={false}
      content={<SearchResult results={searchResults} />}
    >
      <label className={styles.search}>
        <SearchOutlined className={styles.icon} />
        <input
          className={styles.input}
          value={keywords}
          autoComplete="off"
          onFocus={() => setOpen(!!result?.length)}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder={intl.formatMessage({
            id: '搜索…',
          })}
        />
      </label>
    </Popover>
  );
};
