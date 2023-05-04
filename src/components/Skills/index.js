import React from 'react';
import Title from '../Common/Title';
import classNames from 'classnames/bind';
import styles from './Skills.module.scss';
const cx = classNames.bind(styles);
function Skills() {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/null/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/null/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/null/javascript--v1.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/null/bootstrap.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/null/nodejs.png' },
    { name: 'Handlebars', icon: 'https://img.icons8.com/arcade/64/null/handlebar-mustache.png' },
    { name: 'React', icon: 'https://img.icons8.com/plasticine/100/null/react.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/ios-filled/50/null/php-logo.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/null/mysql-logo.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/null/mongodb.png' },
  ];

  return (
    <div data-aos="fade-out" className={cx('skills')} id="skills">
      <Title content="Skills" />
      <ul className={cx('list')}>
        {skills.map((skill) => (
          <li key={skill.name}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;