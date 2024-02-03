// function merge(...observables$: Array<Observable<unknown>>) {
//     return new Observable(subscriber => {
//         const allSubscription = new Subscription();

//         observables$.forEach(obs$ => {
//             const subscription = obs$.subscribe(subscriber);
//             // const subscription = obs$.subscribe({
//             //     next: value => {
//             //         subscriber.next(value);
//             //     },
//             // });

//             allSubscription.add(subscription);
//         });

//         return allSubscription;
//     });
// }