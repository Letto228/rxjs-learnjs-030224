import 'bootstrap';
import '../../assets/css/style.css';
import  './styles.css';
import { fromEvent, map } from 'rxjs';
import { liveSearch } from './live-search';
import { Card } from './card.interface';
import { requestToHtmlString } from './request-to-html-string';

const inputElement = document.getElementById('search') as HTMLElement;
const containerElement = document.querySelector('.container') as HTMLElement;

fromEvent<InputEvent>(inputElement, 'input').pipe(
    map(({target}) => (target as HTMLInputElement).value),
    liveSearch<{items: Card[]}>(
        q => `http://api.github.com/search/repositories?q=${q}`
    ),
    map(({items}) => requestToHtmlString(items))

).subscribe(htmlString => {
    containerElement.innerHTML = htmlString;
});
