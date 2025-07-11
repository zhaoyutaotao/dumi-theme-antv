import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import cx from 'classnames';
import { FormattedMessage, Link, useLocale } from 'dumi';
import React from 'react';
import Slider from 'react-slick';

import { ic, icWithLocale } from '../../../../slots/hooks';
import { IC } from '../../../../types';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './index.module.less';

interface Case {
  logo?: string;
  isAppLogo?: boolean;
  title: IC;
  description: IC;
  link?: string;
  image: string;
}

interface CasesProps {
  cases: Case[];
  style?: React.CSSProperties;
  className?: string;
}

export const Cases: React.FC<CasesProps> = ({ cases = [], style = {}, className }) => {
  const lang = useLocale().id;
  const slider = React.useRef<any>(null);

  const clickPrevious = () => {
    slider.current?.slickPrev();
  };
  const clickNext = () => {
    slider.current?.slickNext();
  };

  const getCases = () => {
    let buttons: any;
    if (cases.length > 1) {
      buttons = (
        <div className={styles.buttons}>
          <div className={styles.controlButton} onClick={clickPrevious}>
            <ArrowLeftOutlined className={styles.controlButtonIcon} style={{ fontSize: '16px' }} />
          </div>
          <div className={styles.controlButton} onClick={clickNext} style={{ marginLeft: '-1px' }}>
            <ArrowRightOutlined className={styles.controlButtonIcon} style={{ fontSize: '16px' }} />
          </div>
        </div>
      );
    }
    const children = cases.map((app) => {
      const linkDiv = (
        <div className={styles.detailWrapper} style={{ display: app.link ? 'block' : 'none' }}>
          {app.link && app.link.startsWith('http') ? (
            <a className={styles.detail} href={app.link} target="_blank" rel="noopener noreferrer">
              {<FormattedMessage id="查看详情" />}
            </a>
          ) : (
            <Link className={styles.detail} to={icWithLocale(app.link, lang) || ''}>
              {<FormattedMessage id="查看详情" />}
            </Link>
          )}
        </div>
      );

      return (
        <div className={styles.appWrapper} key={ic(app.title)}>
          <img className={cx(styles.appTeaser, 'index-cases-image')} src={app.image} alt={ic(app.title)} />
          <div className={styles.appLeft}>
            <div className={styles.appContent}>
              <img
                className={cx(styles.appLogo, 'index-case-logo')}
                src={app.logo}
                alt="logo"
                style={{
                  borderRadius: app.isAppLogo ? '15px' : '0px',
                  boxShadow: app.isAppLogo ? '0px 12px 24px #CED4D9' : '0px 0px 0px',
                }}
              />
              <p className={styles.appTitle}>{ic(app.title)}</p>
              <p className={styles.appDescription}>{ic(app.description)}</p>
              {linkDiv}
            </div>
            {buttons}
          </div>
        </div>
      );
    });
    return children;
  };

  const sliderSettings = {
    dots: cases.length > 1,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };
  return (
    <div className={cx(styles.wrapper, className)} style={style}>
      <Slider {...sliderSettings} className={styles.slider} ref={slider}>
        {getCases()}
      </Slider>
    </div>
  );
};
