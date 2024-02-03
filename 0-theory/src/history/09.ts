// import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
// import '../../assets/css/style.css';

// // Subject === Observable + Observer

// const stream$ = new AsyncSubject<number>();

// stream$.subscribe(value => console.log('Sub 1 - ' + value));

// stream$.next(1);
// stream$.next(2);
// stream$.next(3);

// setTimeout(() => {
//     stream$.next(4);
//     stream$.next(5);
//     stream$.next(6);
// }, 4000)

// setTimeout(() => {
//     // console.log(stream$.value);
//     stream$.subscribe(value => {
//         console.log('Sub 2 - ' + value)
//     });

//     stream$.next(7);
//     stream$.next(8);
//     stream$.next(9);

//     stream$.complete();
// }, 5000)
