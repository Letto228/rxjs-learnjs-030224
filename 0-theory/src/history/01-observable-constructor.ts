// const maxCount = 5;

// const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('START');

//     let count = 0;

//     // subscriber.next(count++);
//     // subscriber.next(count++);
//     // subscriber.next(count++);
//     // subscriber.next(count++);
//     // subscriber.next(count++);
//     // subscriber.next(count++);

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         if (count >= maxCount) {
//             subscriber.complete();
//             // subscriber.error(new Error('Max count'));
//         }
//     }, 1000);

//     return () => {
//         console.log('DESTROY');
//         clearInterval(intervalId);
//     }
// });

// // stream$.subscribe(counter => {
// //     terminalLog(counter);
// // });

// const allSubscription = new Subscription();

// // setTimeout(() => {
// const subscription = stream$.subscribe({
//     next: counter => {
//         terminalLog(counter);
//     },
//     complete: () => {
//         terminalLog(`COMPLETED`);
//     },
//     error: error => {
//         terminalLog(error);
//     },
// });
// // }, 3000)

// allSubscription.add(subscription);

// setTimeout(() => {
//     // subscription.unsubscribe();
//     console.log(allSubscription.closed);
//     allSubscription.unsubscribe();
//     console.log(allSubscription.closed);
// }, 3000);
