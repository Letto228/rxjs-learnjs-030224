import { Observable, filter, map, zip } from "rxjs";

function getXPosition(event: MouseEvent | TouchEvent) {
    return event instanceof MouseEvent
        ? event.clientX
        : event.changedTouches.item(0)!.clientX;
}

export function swipe$(
    down$: Observable<MouseEvent | TouchEvent>,
    up$: Observable<MouseEvent | TouchEvent>,
) {
    return zip(
        down$.pipe(map(getXPosition)),
        up$.pipe(map(getXPosition)),
    ).pipe(
        map(([startPosition, endPosition]) => endPosition - startPosition),
        filter(diff => Math.abs(diff) > 30),
    );
}