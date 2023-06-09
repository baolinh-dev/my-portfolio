import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ProjectSliderItem.module.scss';

const cx = classNames.bind(styles);

function ProjectSliderItem({ content, infor, imgSrc, images, revert, sourceCode, liveDemo }) { 
    return (
        <div className={cx('project-content', { revert: revert })}>
            <div className={cx('project-img')} data-aos={revert ? 'fade-left' : 'fade-right'}>
                <img src={imgSrc} alt="" /> 
            </div>
            <div className={cx('project-infor')} data-aos={revert ? 'fade-right' : 'fade-left'}>
                <h2>{content}</h2>
                <p>{infor}</p>
                <div className={cx('project-code')}>
                    {sourceCode && (
                        <a target="_blank" href={sourceCode}>
                            <span>Source code</span> 
                            <FontAwesomeIcon icon={faGithub} /> 
                        </a>
                    )}
                    
                    {liveDemo && (
                        <a target="_blank" href={liveDemo}>
                            <span>Live demo</span> 
                            <FontAwesomeIcon icon={faShareAlt} /> 
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectSliderItem;
