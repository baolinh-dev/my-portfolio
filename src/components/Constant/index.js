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

const vietnamProject = {
    content: 'Viet Nam Football',
    infor: "Vietnam Football is a website that promotes Vietnamese football and sells football-related goods. Its beautiful and user-friendly interface makes it easy for visitors to browse the latest news, schedules, and results of Vietnamese football matches, as well as shop for merchandise. It's a great resource for fans, tourists, and traders interested in Vietnamese football and culture.",
    imgSrc: 'https://baolinh-dev.github.io/portfolio/assets/imgs/vietnam.gif',
    sourceCode: 'https://github.com/baolinh-dev/vietnam-football',
    liveDemo: 'https://baolinh-dev.github.io/vietnam-football/',
};

const panageaProject = {
    content: 'Panagea Travel',
    infor: "Panagea Travel is much more than just a simple travel website. It's a comprehensive resource that not only introduces some of the most famous tourist destinations in Vietnam but also provides visitors with a wealth of information about the country's rich culture, history, and local customs. The website's beautiful and user-friendly interface makes it easy for anyone to navigate and discover all that Vietnam has to offer. Whether you're planning your first trip to Vietnam or you're a seasoned traveler looking for new adventures, Panagea Travel is the perfect starting point.",
    imgSrc: 'https://baolinh-dev.github.io/portfolio/assets/imgs/travel.gif',
    sourceCode: 'https://github.com/baolinh-dev/panagea-travel',
    liveDemo: 'https://baolinh-dev.github.io/panagea-travel/',
};

const teahouseProject = {
    content: 'Tea House',
    infor: "Teahouse is more than just an e-commerce website that sells tea-related drinks. It's a platform that connects tea enthusiasts with high-quality and delicious tea blends. The website offers a wide variety of tea-based drinks, including milk tea, peach tea, and lemon tea, all of which are carefully crafted to deliver a satisfying and refreshing experience",
    imgSrc: 'https://baolinh-dev.github.io/portfolio/assets/imgs/teahouse.gif',
    sourceCode: 'https://github.com/baolinh-dev/tea-house-full',
    liveDemo: 'https://baolinh-dev.github.io/vietnam-football/',
}; 

const pizzaProject = {
    content: 'Pizza App',
    infor: "This project is a cross-platform Java app with an admin web interface built using ReactJS. The app is an e-commerce platform for online pizza ordering. Users can browse through the menu, customize their pizza orders, and make payments securely through the app. The admin web interface allows the restaurant staff to manage orders, update the menu, and track inventory. The app is designed to be user-friendly and responsive, with a clean and modern interface. It is compatible with multiple platforms, including desktop and mobile devices.",
    imgSrc: 'https://baolinh-dev.github.io/portfolio/assets/imgs/pizza.gif',
    sourceCode: 'https://gitlab.com/e-commerce-pizza',
    liveDemo: 'https://baolinh-dev.github.io/vietnam-football/',
}; 

const downloadCV = 'https://drive.google.com/uc?export=download&id=10U_DSqyYIa8dtKWAHSvp_jguCZ78tyjq'

const skillNames = skills.map((skill) => skill.name);
const skillIcons = skills.map((skill) => skill.icon);

export { skills, skillNames, skillIcons, vietnamProject, panageaProject, teahouseProject, pizzaProject, downloadCV};
