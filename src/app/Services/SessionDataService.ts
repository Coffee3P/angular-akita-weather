import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionDataService {
    login(creds) {
        console.log(`SessionDataService: Login with email: ${creds.email} and password: ${creds.password}.`);

        let returnValue = { token: '', name: 'Unauthorized person' };

        if (creds.email === 'Emil') {
            returnValue.token = '';
            returnValue.name = 'Emil';
        }

        return timer(300).pipe(mapTo(returnValue));
    }
}