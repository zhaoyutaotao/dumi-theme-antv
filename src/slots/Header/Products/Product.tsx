import { FormattedMessage } from 'dumi';
import React from 'react';
import styles from './Product.module.less';
import { ProductType } from './getProducts';

interface ProductProps {
  name?: string;
  icon?: string;
  slogan?: string;
  description?: string;
  url?: string;
  links: ProductType['links'];
  style?: React.CSSProperties;
  language?: string;
}

const getTarget = (url: string) =>
  url.startsWith('http') && !url.includes('gitee.io') && !url.includes('antv.vision') ? '_blank' : '_self';

const Product: React.FC<ProductProps> = ({
  name,
  icon,
  url = '',
  slogan,
  description,
  links = {},
  style,
  language,
}) => {
  return (
    <li className={styles.product} style={style}>
      <a href={url} target={getTarget(url)}>
        <img alt={name} src={icon} />
      </a>
      <div className={styles.productContent}>
        <a href={url} target={getTarget(url)}>
          <h4>
            {name}
            <span className={styles.productSlogan} style={{ opacity: language === 'en' ? 0.7 : '' }}>
              {slogan}
            </span>
          </h4>
        </a>
        <div className={styles.productDescription}>{description}</div>
        <div className={styles.productLinks}>
          {links.home && (
            <a href={links.home.url} target={getTarget(links.home.url || '')}>
              {links.home.title ?? <FormattedMessage id="产品首页" />}
            </a>
          )}
          {links.example && (
            <a href={links.example.url} target={getTarget(links.example.url || '')}>
              {links.example.title ?? <FormattedMessage id="图表示例" />}
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default Product;
