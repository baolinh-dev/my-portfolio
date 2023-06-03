import classNames from 'classnames/bind';
import styles from './Title.module.scss';
import { isMobile } from 'react-device-detect';

const cx = classNames.bind(styles);

function Title({ content }) {
  const titleClasses = cx({
    'title': !isMobile,
    'title-sm': isMobile
  });

  return (
    <div className={cx('title-wrapper')}>
      <h1 className={titleClasses}>{content}</h1>
    </div>
  );
}

export default Title;