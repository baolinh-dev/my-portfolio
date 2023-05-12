import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ href, children, download, onClick }) {
    return (
        <a
            href={href}
            className={cx('button')} 
            download={download}  
            onClick={onClick}
        >
            {children}
        </a>
    );
}

export default Button;
