import { SessionDataService } from "../Services/SessionDataService";
import { SessionStore } from "./session.store";
import { tap } from "rxjs/operators"; 

export class SessionService {
    constructor(private authStore: SessionStore,
                private authDataService: SessionDataService) { }

    login(creds) {
        return this.authDataService.login(creds).pipe(
            tap(session => this.authStore.login(session))
        );
    }

    logout(): void {
        this.authStore.logout();
    }
}