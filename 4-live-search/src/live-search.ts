import { EMPTY, OperatorFunction, catchError, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, map, pipe, retry, switchMap } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        filter(searchParam => !searchParam || searchParam.length >= 3),
        distinctUntilChanged(), // ==
        map(searchParam => (<AjaxConfig>{
            ...requestConfig,
            url: urlCreater(searchParam),
        })),
        switchMap(config => ajax<T>(config).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                delay: 2000,
            }),
            catchError(() => {
                return EMPTY;
            }),
        )),
        // catchError(() => {
        //     return EMPTY;
        // })
    );
}
