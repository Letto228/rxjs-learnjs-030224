import { asapScheduler, asyncScheduler, animationFrameScheduler } from 'rxjs';
import '../../assets/css/style.css';
import { animationDownElement$ } from './animate';
import  './styles.css';

const shapeElement = document.querySelector('.animated-shape') as HTMLElement;

animationDownElement$(shapeElement, 15000, animationFrameScheduler).subscribe(elementDiffPosition => {
    console.log(elementDiffPosition);
});
