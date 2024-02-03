
// function withLatestFrom(...observables$: Array<Observable<unknown>>) {
//     return (source$: Observable<unknown>) => new Observable(subscriber => {
//         const allSubscription = new Subscription();
//         const lastValues: unknown[] = [];

//         observables$.forEach((obs$, index) => {
//             const subscription = obs$.subscribe({
//                 next: value => {
//                     lastValues[index] = value;
//                 },
//             });

//             allSubscription.add(subscription);
//         });

//         const subscription = source$.subscribe({
//             next: value => {
//                 if (observables$.every((_, index) => lastValues[index])) {
//                     return;
//                 }

//                 subscriber.next([value, ...lastValues]);
//             },
//             complete: () => {
//                 subscriber.complete();
//             }
//             // error ...,
//         })

//         allSubscription.add(subscription);

//         return allSubscription;
//     });
// }
