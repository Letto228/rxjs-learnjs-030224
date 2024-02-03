import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";
import { AsyncSubject, map, share } from "rxjs";

class UserService {
    readonly uniqueNameSequence$ = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1n2npqk',
        crossDomain: true,
        method: 'GET',
    }).pipe(
        map(({response}) => response.map(({profileName}) => profileName)),
        share({
            connector: () => new AsyncSubject(),
            resetOnComplete: false,
        }),
    )
}

export const userService = new UserService();
