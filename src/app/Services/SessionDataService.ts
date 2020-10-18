import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionDataService {
    login(creds) {
        console.log(`SessionDataService: Login with email: ${creds.email} and password: ${creds.password}.`);

        let returnValue = { token: '', name: 'Unauthorized person', city: '' };

        if (creds.email === 'Emil') {
            returnValue.token = '6acd122a0b6ee159049e169908b9e649';
            returnValue.name = 'Emil';
            returnValue.city = 'Aarhus';
        }

        return timer(300).pipe(mapTo(returnValue));
    }
}