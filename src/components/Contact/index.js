import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles); 

function Contact() {
    return (
        <div className={cx('contact')} id="contact">
            <h1>Contact Page</h1>
        </div>
    );
}

export default Contact;
