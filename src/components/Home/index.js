import Typewriter from 'typewriter-effect';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from '../Common/Button';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Home() {
    const contactElement = document.getElementById('contact');
    const handleScrollToContact = () => {
        scroll.scrollTo(contactElement.offsetTop);
    };
    return (
        <div className={cx('home')} id="home">
            <div className={cx('infor')}>
                <p className={cx('greeting')}>Hi,</p>
                <p className={cx('introduce')}>
                    I'm <span className={cx('name')}>Tran Bao Linh</span>{' '}
                </p>
                <Typewriter
                    className={cx('auto-write-text')}
                    options={{
                        strings: ['Intern Web Developer', 'a Second-year student at VKU'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <Button className={cx('infor-button')} href="#contact" onClick={handleScrollToContact}>
                    Contact
                </Button>
                <div className={cx('socials')}>
                    <a href="https://github.com/baolinh-dev" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.facebook.com/linkdarealest/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <div className={cx('phones')}>
                        <a href="tel:84-0768494121" target="_blank">
                            <p>Call me now: (+84) 768494121</p>
                            
                        </a>
                    </div>
                </div>
            </div>

            <img className={cx('avatar')} src="https://baolinh-dev.github.io/portfolio/assets/imgs/avatar.jpg" />
        </div>
    );
}

export default Home;
