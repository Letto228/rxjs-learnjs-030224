import { Observable, fromEvent, map, switchMap, takeUntil, tap } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    const elementMouseDown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    return elementMouseDown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        // takeUntil(mouseup$),
        switchMap(({offsetX, offsetY}) => mousemove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}) => (<ElementPosition>{
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            takeUntil(mouseup$),
        )),
        // takeUntil(mouseup$),
    )
}