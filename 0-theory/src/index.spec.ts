
import { asapScheduler, asyncScheduler, combineLatest, from, interval, map, observeOn, of, scheduled, subscribeOn, take, tap } from 'rxjs';
import '../../assets/css/style.css';
import { TestScheduler } from 'rxjs/testing';

// describe('Test example', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         });
//     });

//     it('test', () => {
//         testScheduler.run(({cold, hot, expectObservable, expectSubscriptions}) => {

//         })
//     })
// })

describe('Test example', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Cold test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = cold(
                '-a--b---c---|',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                },
            );
            const resultStream$ = stream$.pipe(
                map(value => value * 2),
            );

            const expectedMarbles = '-a--b---c---|';
            const expectedMarblesValueMap = {
                a: 2,
                b: 12,
                c: 20,
            }

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap)
        })
    })

    it('interval test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = interval(2);
            const resultStream$ = stream$.pipe(
                map(value => value * 2),
                take(4),
            );

            const expectedMarbles = '--a-b-c-(d|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 2,
                c: 4,
                d: 6,
            }

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap)
        })
    })

    it('of test', () => {
        testScheduler.run(({expectObservable}) => {
            const stream$ = of(0, 1, 2, 3, 4);
            const resultStream$ = stream$.pipe(
                map(value => value * 2),
                take(4),
            );

            const expectedMarbles = '(abcd|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 2,
                c: 4,
                d: 6,
            }

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap)
        })
    })

    it('Hot test', () => {
        testScheduler.run(({expectObservable, hot}) => {
            const stream$ = hot(
                '-a--b---c------d',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                    d: 100,
                },
            );
            const resultStream$ = stream$.pipe(
                map(value => value * 3),
            );

            const subscriptionMarbles = '---^------------!';
            const expectedMarbles = '    ----b---c------d';
            const expectedMarblesValueMap = {
                b: 18,
                c: 30,
                d: 300,
            }

            expectObservable(resultStream$, subscriptionMarbles).toBe(expectedMarbles, expectedMarblesValueMap)
        })
    })
})
