import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ href, children }) {
    return (
        <a
            href={href}
            className={cx('button')} 
            download
        >
            {children}
        </a>
    );
}

export default Button;
