
import { asapScheduler, asyncScheduler, combineLatest, from, interval, observeOn, of, scheduled, subscribeOn, tap } from 'rxjs';
import '../../assets/css/style.css';

// const testArray = Array.from({length: 10}, (_, i) => i);

// console.log('after subscribe');

// from(testArray).subscribe(console.log);
// interval(1000).subscribe(console.log);
// from(testArray, asapScheduler).subscribe(console.log);
// scheduled(testArray, asyncScheduler).subscribe(console.log);

// from(testArray)
//     .pipe(
//         tap(() => {
//             console.log('default schedular');
//         }),
//         observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before async schedular');
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(value => {
//         console.log(`async - ${value}`);
//     });

// of(1,2,3).subscribe(value => {
//     console.log(`sync - ${value}`);
// });

// console.log('before subscribe');

// const streamFirst$ = of(1,2);
// const streamFirst$ = scheduled([1,2], asapScheduler);
// const streamSecond$ = of(10);

// const stream$ = combineLatest([
//     streamFirst$,
//     streamSecond$,
// ]);

// stream$.subscribe(console.log);
