import classNames from 'classnames/bind';
import styles from './Title.module.scss'; 

const cx = classNames.bind(styles); 

function Title({ content, sm}) {
    return (
        <div className={cx('title-wrapper')}>
            <h1 className={cx('title', { 'title-sm': sm })}>{content}</h1>
        </div>
    );
}

export default Title;
