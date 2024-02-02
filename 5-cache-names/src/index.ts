import 'bootstrap';
import '../../assets/css/style.css';

const formMain = document.querySelector('.first-form') as HTMLElement;
const formSecond = document.querySelector('.second-form') as HTMLElement;

formSecond.hidden = true;

setTimeout(() => {
    // create second form
    formSecond.hidden = false;
}, 10000)