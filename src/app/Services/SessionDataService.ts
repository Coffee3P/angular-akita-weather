import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

export class SessionDataService {
    login(creds) {
        return timer(300).pipe(mapTo({ token: '<Token here>', name: '' }));
    }
}