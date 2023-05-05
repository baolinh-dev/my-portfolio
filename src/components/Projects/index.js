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
                Vietnam football is a website that aims to promote Vietnamese
                football to domestic and foreign tourists as well as trade in
                Vietnamese football related goods. The website provieders a
                beautiful and user-friendly interface
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
                Panagea Travel là trang web giới thiệu về du lịch Việt Nam. Những
                điểm điểm du lịch hổi tiếng của Việt Nam như Vịnh Hạ Long, Phố Cổ
                Hội An, .... The website provieders a beautiful and user-friendly
                interface  
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
                Teahouse is a website that commerce tea-related drinks such as
                milk tea, peach tea, lemon tea The website has an admin page used
                to manage products, manage orders ..., a user page to order,
                contact, ...  
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
                <Button href="https://drive.google.com/uc?export=download&id=10U_DSqyYIa8dtKWAHSvp_jguCZ78tyjq">
                    Download CV
                </Button>
            </div>
        </div>
    );
}

export default Projects;
