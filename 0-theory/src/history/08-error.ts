// import { EMPTY, NEVER, Observable, OperatorFunction, Subscription, catchError, concatMap, exhaustMap, interval, map, mergeAll, mergeMap, observable, of, retry, switchMap, take, takeUntil, tap, throwError, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { error } from 'jquery';

// const streamWithError$ = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error(new Error('Error'));
// });

// // streamWithError$
// //     .pipe(
// //         tap({
// //             next: terminalLog,
// //             error: () => {
// //                 console.log('Catch');
// //             },
// //         })
// //     )
// //     .subscribe();

// // streamWithError$.subscribe({
// //     next: terminalLog,
// //     error: () => {
// //         console.log('Catch');
// //     },
// // });

// streamWithError$
//     .pipe(
//         // retry(3),
//         retry({
//             count: 3,
//             // delay: 1000
//             delay: (error, retryCount) => timer(retryCount * 1000),
//             // resetOnSuccess: false,
//         }),
//         catchError(error => {
//             console.log('catchError', error);

//             // return of();
//             // return parentStream$;
//             return EMPTY; // |
//             // return NEVER; // ---------------------------------------------------
//             // return throwError(() => new Error('ERROR')); // X
//         }),
//     )
//     .subscribe({
//         next: terminalLog,
//         error: error => {
//             console.log('Catch', error);
//         },
//         complete: () => {
//             console.log('Completed');
//         }
//     });
