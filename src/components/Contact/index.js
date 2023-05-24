import Title from '../Common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact')} id="contact">
            <Title content={'Contact'}></Title>
            <div className={cx('contact-main')}>
                <div data-aos='fade-right' className={cx('contact-infor')}>
                    <h2>Got a problem to solve?</h2>
                    <p>Get your space suit ready and tell me your ideas to develop your dream application.</p>
                    <p className={cx('contact-mail')}>
                        <span>
                            {' '}
                            <FontAwesomeIcon icon={faEnvelope} />{' '}
                        </span>{' '}
                        baolinhdev@gmail.com
                    </p>
                </div>
                <form data-aos='fade-left' className={cx('contact-form')}>
                    <input placeholder="Name" type="text" id="name" name="name" required />
                    <input placeholder="Email" type="email" id="email" name="email" required />
                    <textarea placeholder="Message" id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
