import Title from '../Common/Title';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);
function About() {
    return ( 
        <div className={cx('about')} id="about">
            <Title content="About" />
            <div className={cx('about-wrapper')}>
                <img src="https://baolinh-dev.github.io/portfolio/assets/imgs/about-image.jpg" />
                <div className={cx('about-infor')}>
                    <h2>Tran Bao Linh</h2>
                    <p>
                        Hard working software engineering student from Zenica in my third and final year. I'm also a
                        former Pharmacy technician and a future full stack developer. I’ve found my passion in web
                        development. I love spending time coding and encountering new challenges. I’m highly adaptable
                        to new challenges and projects. I'm a Junior Scholar at Bosnia and Herzegovina Futures
                        foundation and that is the best thing that happened to me
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
