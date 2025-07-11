import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.less';

export const Article: React.FC<any> = (props) => {
  return (
    <Layout.Content className={styles.article}>
      <article {...props} />
    </Layout.Content>
  );
};
