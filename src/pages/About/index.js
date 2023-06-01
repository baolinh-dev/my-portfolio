import Title from '../../components/Common/Title';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import {skills} from '~/components/Constant'  

const cx = classNames.bind(styles); 

function About() {
    return (
        <div className={cx('about')} id="about">
            <Title content="About" />
            <div className={cx('about-wrapper')}>
                <img
                    className={cx('about-wrapper-img')}
                    data-aos="fade-right"
                    src="https://baolinh-dev.github.io/portfolio/assets/imgs/about-image.jpg"
                />
                <div data-aos="fade-left" className={cx('about-infor')}>
                    <h2>About me</h2>
                    <p>
                        My name is Tran Bao Linh. I am a 21-year-old male student at VKU. My areas of expertise include
                        web development using ReactJS and NodeJS. I am a hardworking and diligent individual who is
                        always eager to learn and improve my skills.
                    </p>
                    <p>
                        In my free time, I enjoy coding, reading, and gaming. I believe that my strong work ethic,
                        dedication, and enthusiasm make me a valuable asset to any team or project.
                    </p>
                    <p>
                        I am excited about the opportunity to use my skills and experience to contribute to the success
                        of your organization. Thank you for considering my application.
                    </p>
                    <h2 className={cx('heading-sub')}>All tech stack:</h2>
                    <ul className={cx('list')}>
                        {skills.map((skill) => (
                            <li key={skill.name}>
                                <img src={skill.icon} alt={skill.name} />
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
