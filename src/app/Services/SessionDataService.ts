import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionDataService {
    login(creds) {
        return timer(300).pipe(mapTo({ token: '<Token here>', name: '' }));
    }
}