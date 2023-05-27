import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ href, children, download, onClick }) {
    return href ? (
        <a href={href} className={cx('button')} download={download} onClick={onClick}>
            {children}
        </a>
    ) : (
        <button type='submit' href={href} className={cx('button')} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
