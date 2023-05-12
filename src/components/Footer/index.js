import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles); 
function Footer() {
    return (
        <div className={cx('footer')}>
            <img 
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ac9da052776ae0ebf5b20444a124367~c5_100x100.jpeg?x-expires=1683554400&x-signature=BqQGyGCPTZiM44X%2BFTDZWfc1RrQ%3D"
                alt="logo"
            ></img> 
            <div className={cx('copyright')}> 
                <p>Copyright © 2023 - Tran Bao Linh.</p> 
                <ul>
                    <li>
                        <a>
                            <FontAwesomeIcon  icon={faFacebook}/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon  icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon  icon={faLinkedin}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
