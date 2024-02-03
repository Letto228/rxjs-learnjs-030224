import { Observable, asyncScheduler, interval, map, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(scheduler = asyncScheduler): Observable<number> {
    const stratTime = scheduler.now();

    return interval(0, scheduler).pipe(
        map(() => scheduler.now() - stratTime),
    );
}

function duration$(allMs: number, scheduler = asyncScheduler): Observable<number> {
    return time$(scheduler).pipe(
        map(time => time / allMs),
        takeWhile(percentage => percentage <= 1),
    )
}

const diffInPx = 300;

export function animationDownElement$(
    element: HTMLElement,
    animationTime: number,
    scheduler = asyncScheduler,
): Observable<number> {
    return duration$(animationTime, scheduler).pipe(
        map(animationFn),
        map(percentage => percentage * diffInPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`
        })
    )
}
