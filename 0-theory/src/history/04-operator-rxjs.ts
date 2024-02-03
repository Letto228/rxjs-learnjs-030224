// import { MonoTypeOperatorFunction, Observable, OperatorFunction, filter, of } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // function filterStreamByValue<T>(
// //     filterCb: (streamValue: T) => boolean,
// // ): (source$: Observable<T>) => Observable<T> {
// //     return (source$: Observable<T>) => new Observable<T>(subscriber => {
// //         const subscription = source$.subscribe({
// //             next: value => {
// //                 if (filterCb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             error: err => {
// //                 subscriber.error(err);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             }
// //         });

// //         // return () => {
// //         //     subscription.unsubscribe();
// //         // }
// //         // return {
// //         //     unsubscribe: () => {
// //         //         subscription.unsubscribe();
// //         //     }
// //         // };
// //         return subscription;
// //     });
// // }

// // function filterStreamByValue<T>(
// //     filterCb: (streamValue: T) => boolean,
// // // ): (source$: Observable<T>) => Observable<T> {
// // // ): OperatorFunction<T, T> {
// // ): MonoTypeOperatorFunction<T> {
// //     return (source$: Observable<T>) => new Observable<T>(
// //         subscriber => source$.subscribe({
// //             next: value => {
// //                 if (filterCb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             error: err => {
// //                 subscriber.error(err);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             }
// //         }),
// //     );
// // }

// // const filterStreamByEvenNumbers = filterStreamByValue<number>(value => value % 2 === 0);
// // const filterStreamByEvenNumbers = filter<number>(value => value % 2 === 0);

// // const stream$ = of(1,2,3,4,5,6,7,8,9);

// // filterStreamByEvenNumbers(stream$).subscribe(terminalLog);

// function stub(): OperatorFunction<unknown, string> {
//     return (_source$: Observable<unknown>) => new Observable(subscriber => {
//         // _source$.subscribe();

//         subscriber.next('Stub');
//         subscriber.complete();
//     });
// }

// // const stream$ = of(1,2,3,4,5,6,7,8,9);
// const stream$ = new Observable<number>(subscriber => {
//     console.log('START');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);
//     }, 1000);

//     return () => {
//         console.log('DESTROY');
//         clearInterval(intervalId);
//     }
// });
// const stubOperatorFunction = stub();

// stubOperatorFunction(stream$).subscribe(terminalLog);
