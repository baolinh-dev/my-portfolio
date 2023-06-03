import Title from '~/components/Common/Title';
import Button from '~/components/Common/Button';
import Slider from 'react-slick';
import ProjectContent from './ProjectContent';
import ProjectSliderItem from './ProjectSliderItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import {
    skillIcons,
    vietnamProject,
    panageaProject,
    teahouseProject,
    pizzaProject,
    downloadCV,
} from '~/components/Constant';
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';

const cx = classNames.bind(styles);

// constants
const [
    htmlIcon,
    cssIcon,
    sassIcon,
    javascriptIcon,
    bootstrapIcon,
    nodejsIcon,
    reactIcon,
    phpIcon,
    mysqlIcon,
    mongodbIcon,
    javaIcon,
] = skillIcons;
// setting slider
const settingSliders = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
function Projects() {
    // Responsive
    const isPC = useMediaQuery({
        query: '(min-width: 1024px)',
    });
    const isPCandTable = useMediaQuery({
        query: '(min-width: 768px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1023px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });
    return (
        <>
            {isPCandTable ? (
                <div className={cx('projects')} id="projects">
                    <Title content="Projects" />
                    <ProjectContent
                        content={vietnamProject.content}
                        infor={vietnamProject.infor}
                        imgSrc={vietnamProject.imgSrc}
                        images={[htmlIcon, cssIcon, javascriptIcon]}
                        sourceCode={vietnamProject.sourceCode}
                        liveDemo={vietnamProject.liveDemo}
                    />
                    <ProjectContent
                        revert
                        content={panageaProject.content}
                        infor={panageaProject.infor}
                        imgSrc={panageaProject.imgSrc}
                        images={[htmlIcon, cssIcon, javascriptIcon]}
                        sourceCode={panageaProject.sourceCode}
                        liveDemo={panageaProject.liveDemo}
                    />
                    <ProjectContent
                        content={teahouseProject.content}
                        infor={teahouseProject.infor}
                        imgSrc={teahouseProject.imgSrc}
                        images={[nodejsIcon, sassIcon, mongodbIcon]}
                        sourceCode={teahouseProject.sourceCode}
                        liveDemo={teahouseProject.liveDemo}
                    />
                    <ProjectContent
                        revert
                        content={pizzaProject.content}
                        infor={pizzaProject.infor}
                        imgSrc={pizzaProject.imgSrc}
                        images={[reactIcon, sassIcon, javaIcon, mysqlIcon]}
                        sourceCode={pizzaProject.sourceCode}
                        liveDemo={pizzaProject.liveDemo}
                    />
                    <div className={cx('projects-button')}>
                        <Button download href={downloadCV}>
                            Download CV
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={cx('projects')} id="projects">
                    <Title content="Projects" sm />
                    <Slider {...settingSliders} style={{ padding: '0 20px' }}>
                        <ProjectSliderItem
                            content={vietnamProject.content}
                            infor={vietnamProject.infor}
                            imgSrc={vietnamProject.imgSrc}
                            images={[htmlIcon, cssIcon, javascriptIcon]}
                            sourceCode={vietnamProject.sourceCode}
                            liveDemo={vietnamProject.liveDemo}
                        />
                        <ProjectSliderItem
                            revert
                            content={panageaProject.content}
                            infor={panageaProject.infor}
                            imgSrc={panageaProject.imgSrc}
                            images={[htmlIcon, cssIcon, javascriptIcon]}
                            sourceCode={panageaProject.sourceCode}
                            liveDemo={panageaProject.liveDemo}
                        />
                        <ProjectSliderItem
                            content={teahouseProject.content}
                            infor={teahouseProject.infor}
                            imgSrc={teahouseProject.imgSrc}
                            images={[nodejsIcon, sassIcon, mongodbIcon]}
                            sourceCode={teahouseProject.sourceCode}
                            liveDemo={teahouseProject.liveDemo}
                        />
                        <ProjectSliderItem
                            revert
                            content={pizzaProject.content}
                            infor={pizzaProject.infor}
                            imgSrc={pizzaProject.imgSrc}
                            images={[reactIcon, sassIcon, javaIcon, mysqlIcon]}
                            sourceCode={pizzaProject.sourceCode}
                            liveDemo={pizzaProject.liveDemo}
                        />
                    </Slider>
                </div>
            )}
        </>
    );
}

export default Projects;
