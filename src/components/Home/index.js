import Typewriter from 'typewriter-effect';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import MyParticles from '../Common/MyParticles';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')} id="home">
            <div className={cx('infor')}> 
                <p className={cx('greeting')}>Hi,</p> 
                <p className={cx('introduce')}>I'm, <span className={cx('name')}>Tran Bao Linh</span>  </p>  
                <Typewriter
                    className={cx('auto-write-text')}
                    options={{
                        strings: ['Intern Web Developer', 'a Second-year student at VKU'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <img className={cx('avatar')} src="https://baolinh-dev.github.io/portfolio/assets/imgs/avatar.jpg" />
        </div>
    );
}

export default Home;
