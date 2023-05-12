import Title from '../Common/Title';
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import ProjectContent from './ProjectContent';
import Button from '../Common/Button';
const cx = classNames.bind(styles);

function Projects() {
    return (
        <div className={cx('projects')} id="projects">
            <Title content="Projects" />
            <ProjectContent
                content="Viet Nam Football"
                infor="
                Vietnam Football is a website that promotes Vietnamese football and sells football-related goods. Its beautiful and user-friendly interface makes it easy for visitors to browse the latest news, schedules, and results of Vietnamese football matches, as well as shop for merchandise. It's a great resource for fans, tourists, and traders interested in Vietnamese football and culture.
              "
                imgSrc="https://baolinh-dev.github.io/portfolio/assets/imgs/vietnam.gif"
                images={[
                    'https://img.icons8.com/color/48/null/html-5--v1.png',
                    'https://img.icons8.com/color/48/null/css3.png',
                    'https://img.icons8.com/color/48/null/javascript--v1.png',
                ]}
                sourceCode="https://github.com/baolinh-dev/vietnam-football"
                liveDemo="https://baolinh-dev.github.io/vietnam-football/"
            />
            <ProjectContent
                revert
                content="Panagea Travel"
                infor="
                Panagea Travel is much more than just a simple travel website. It's a comprehensive resource that not only introduces some of the most famous tourist destinations in Vietnam but also provides visitors with a wealth of information about the country's rich culture, history, and local customs. The website's beautiful and user-friendly interface makes it easy for anyone to navigate and discover all that Vietnam has to offer. Whether you're planning your first trip to Vietnam or you're a seasoned traveler looking for new adventures, Panagea Travel is the perfect starting point.  
              "
                imgSrc="https://baolinh-dev.github.io/portfolio/assets/imgs/travel.gif"
                images={[
                    'https://img.icons8.com/color/48/null/html-5--v1.png',
                    'https://img.icons8.com/color/48/null/css3.png',
                    'https://img.icons8.com/color/48/null/javascript--v1.png',
                ]}
                sourceCode="https://github.com/baolinh-dev/panagea-travel"
                liveDemo="https://baolinh-dev.github.io/panagea-travel/"
            />
            <ProjectContent
                content="Tea House"
                infor="
                Teahouse is more than just an e-commerce website that sells tea-related drinks. It's a platform that connects tea enthusiasts with high-quality and delicious tea blends. The website offers a wide variety of tea-based drinks, including milk tea, peach tea, and lemon tea, all of which are carefully crafted to deliver a satisfying and refreshing experience. 
              "
                imgSrc="https://baolinh-dev.github.io/portfolio/assets/imgs/teahouse.gif"
                images={[
                    'https://img.icons8.com/color/48/null/nodejs.png',
                    'https://img.icons8.com/color/48/null/sass.png',
                    'https://img.icons8.com/arcade/64/null/handlebar-mustache.png',
                    'https://img.icons8.com/color/48/null/mongodb.png',
                ]}
                sourceCode="https://github.com/baolinh-dev/tea-house-full"
                liveDemo="https://baolinh-dev.github.io/vietnam-football/"
            />
            <div className={cx('projects-button')}>
                <Button download href="https://drive.google.com/uc?export=download&id=10U_DSqyYIa8dtKWAHSvp_jguCZ78tyjq">
                    Download CV
                </Button>
            </div>
        </div>
    );
}

export default Projects;
