// import { MonoTypeOperatorFunction, Observable, OperatorFunction, filter, map, of } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const filterEven = filter<unknown>(value => (value as number) % 2 === 0);
// const double = map<unknown, number>(value => (value as number) * 2);

// const stream$ = of(1,2,3,4,5,6,7,8,9);

// // const filterEvenChildStream$ = filterEven(stream$);
// // const doubleChildStream$ = double(filterEvenChildStream$);

// // doubleChildStream$.subscribe(terminalLog);

// // const resultStream$ = double(
// //     filterEven(
// //         stream$
// //     )
// // )

// // resultStream$.subscribe(terminalLog);

// function pipe<T, U>(
//     ...operatorFunctions: Array<OperatorFunction<unknown, unknown>>
// ): OperatorFunction<T, U> {
//     return (source$: Observable<T>) => operatorFunctions.reduce(
//         (accSource$: Observable<unknown>, operator) => operator(accSource$),
//         source$
//     ) as unknown as Observable<U>;
// }

// // pipe(
// //     filter<unknown>(value => (value as number) % 2 === 0),
// //     map<unknown, number>(value => (value as number) * 2),
// // )(stream$).subscribe(terminalLog);

// stream$.pipe(
//     filter<unknown>(value => (value as number) % 2 === 0),
//     map<unknown, number>(value => (value as number) * 2),
// ).subscribe(terminalLog);
