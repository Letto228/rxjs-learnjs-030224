// import { Observable, OperatorFunction, Subscription, concatMap, exhaustMap, interval, map, mergeAll, mergeMap, observable, of, switchMap, take, takeUntil, tap } from 'rxjs';
// import '../../assets/css/style.css';

// // const hooStream$ = interval(1000).pipe(
// //     // map(value => of(value)), // Observable<Obserable<number>>
// //     // mergeAll(), // Observable<number>
// //     // mergeMap(value => of(value)),
// //     concatMap(value => of(value)), // ~ mergeMap(value => of(value), 1)
// // );

// // hooStream$.subscribe(console.log);

// // function mergeMap(cb: (value: unknown) => Observable<unknown>): OperatorFunction<unknown, unknown> {
// //     return (source$: Observable<unknown>) => new Observable(subscriber => {
// //         const allSub = new Subscription();

// //         allSub.add(
// //             source$.subscribe(value => {
// //                 allSub.add(
// //                     cb(value).subscribe({
// //                         next: value => {
// //                             subscriber.next(value);
// //                         }
// //                     })
// //                 )
// //             })
// //         );

// //         return allSub;
// //     })
// // }

// interval(3000).pipe(
//     tap(count => {
//         console.log('-NEW ROOT VALUE', count)
//     }),
//     exhaustMap(count => {
//         console.log('----START', count);

//         return interval(1000).pipe(
//             take(7),
//             map(value => `Root ${count}: ${value}`),
//             tap({
//                 complete: () => {
//                     console.log('----COMPLETE', count)
//                 }
//             })
//         )
//     }),
// ).subscribe(console.log);
