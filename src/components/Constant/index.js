const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/null/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/null/css3.png' },
    { name: 'SASS', icon: 'https://img.icons8.com/color/48/null/sass.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/null/javascript--v1.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/null/bootstrap.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/null/nodejs.png' },
    { name: 'React', icon: 'https://img.icons8.com/plasticine/100/null/react.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/ios-filled/50/null/php-logo.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/null/mysql-logo.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/null/mongodb.png' },
    { name: 'Java', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-64.png' },
];

const skillNames = skills.map((skill) => skill.name);
const skillIcons = skills.map((skill) => skill.icon);  

export { skills, skillNames, skillIcons };
