import 'bootstrap';
import 'bootstrap-slider';
import  './styles.css';
import { MonoTypeOperatorFunction, Observable, OperatorFunction, fromEvent, map, of, pipe, startWith, tap } from 'rxjs';

interface JQuerySliderEvent {
    value: {
        newValue: number;
    }
}

enum SliderClass {
    Good = 'good',
    Warn = 'warn',
    Bad = 'bad',
}

function colorizeSlider(jqueryElement: JQuery<HTMLElement>): MonoTypeOperatorFunction<number> {
    const element = jqueryElement.prev().get(0).querySelector('.slider-track') as HTMLElement;
    const allSliderClasses = Object.values(SliderClass);

    // return pipe(
    //     tap(() => {
    //         // colorize
    //     }),
    // );
    return tap(sliderValue => {
        element.classList.remove(...allSliderClasses);

        if (sliderValue < 4) {
            element.classList.add(SliderClass.Bad);

            return;
        }

        if (sliderValue <= 7) {
            element.classList.add(SliderClass.Warn);

            return;
        }

        element.classList.add(SliderClass.Good);
    })
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    const startValue = Number(jquerySlider.val());

    return fromEvent<JQuerySliderEvent>(jquerySlider, 'change').pipe(
        map(({value}) => value.newValue),
        startWith(startValue),
        colorizeSlider(jquerySlider),
    );
}
