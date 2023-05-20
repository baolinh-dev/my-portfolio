import Title from '../Common/Title';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles); 
const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/null/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/null/css3.png' },
    { name: 'SASS', icon: 'https://img.icons8.com/color/48/null/sass.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/null/javascript--v1.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/null/bootstrap.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/null/nodejs.png' },
    { name: 'Handlebars', icon: 'https://img.icons8.com/arcade/64/null/handlebar-mustache.png' },
    { name: 'React', icon: 'https://img.icons8.com/plasticine/100/null/react.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/ios-filled/50/null/php-logo.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/null/mysql-logo.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/null/mongodb.png' }, 
    { name: 'Java', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-64.png' }
];
function About() {
    return (
        <div className={cx('about')} id="about">
            <Title content="About" />
            <div className={cx('about-wrapper')}>
                <img data-aos="fade-right" src="https://baolinh-dev.github.io/portfolio/assets/imgs/about-image.jpg" />
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
