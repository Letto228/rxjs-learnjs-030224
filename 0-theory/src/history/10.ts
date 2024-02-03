// import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscriber, interval, share, shareReplay, take } from 'rxjs';
// import '../../assets/css/style.css';

// // const stream$ = (new Observable<number>((subscriber: Subscriber<number>) => {
// //     console.log('START');

// //     let count = 0;

// //     const intervalId = setInterval(() => {
// //         count += 1;

// //         console.log('INCREMENT', count);

// //         subscriber.next(count);
// //     }, 1000);

// //     return () => {
// //         console.log('DESTROY');
// //         clearInterval(intervalId);
// //     }
// // })).pipe(share());

// // const sub = new BehaviorSubject(99999);

// const stream$ = interval(1000).pipe(
//     // take(5),
//     share({
//         // connector: () => new BehaviorSubject(99999),
//         connector: () => new ReplaySubject(),
//         resetOnComplete: true,
//         resetOnError: true,
//         resetOnRefCountZero: false,
//     }),
//     // shareReplay(),
// );

// const subscription = stream$.subscribe(value => console.log('Sub 1 - ' + value));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 2000);

// setTimeout(() => {
//     stream$.subscribe(value => console.log('Sub 2 - ' + value));
// }, 4000);
