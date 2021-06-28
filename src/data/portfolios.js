import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.png';
import img3 from '../img/portImages/maya-3.png';

const portfolios = [
    {
        id: 1,
        category: 'CSS',
        image: css1,
        // link1: 'https://www.google.com',
        link2: 'https://lamanjoloholdings.co.za/index.php',
        title: 'Lamanjolo Website',
        text: 'Created with HTML, Bootstrap, CSS and PHP.'
    },
    {
        id: 2,
        category: 'PHP',
        image: img3,
        // link1: 'https://www.google.com',
        link2: 'https://www.igtech.co.za/timesheet/Admin-Full/auth-login.php',
        title: 'TimeSheet Application',
        text: 'Created with PHP'
    },
    {
        id: 3,
        category: 'Javascript',
        image: img2,
        // link1: 'https://www.google.com',
        link2: 'https://igtech.co.za/thecore/',
        title: 'The Core Website',
        text: 'Created with HTML5 and CSS3'
    },
    {
        id: 4,
        category: 'Animation',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Use Blender',
        text: 'Free Animation Software'
    },
    {
        id: 5,
        category: 'React JS',
        image: react1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 6,
        category: 'CSS',
        image: css2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Microsoft Website Clone',
        text: 'Created using HTML and CSS'
    }
]

export default portfolios;