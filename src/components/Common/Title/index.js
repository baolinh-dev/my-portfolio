import classNames from 'classnames/bind';
import styles from './Title.module.scss';
const cx = classNames.bind(styles);
function Title({ content }) {
    return (
        <div className={cx('title-wrapper')}>
            <h1 className={cx('title')}>{content}</h1>
        </div>
    );
}

export default Title;
