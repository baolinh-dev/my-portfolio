import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({children}) {
    return (   
        <a className={cx('button')}>{children}</a>
    );
}

export default Button;