import { SessionDataService } from "../Services/SessionDataService";
import { SessionStore } from "./session.store";
import { tap } from "rxjs/operators"; 
import { Injectable } from '@angular/core';
import { SessionQuery } from "./session.query";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    constructor(private authStore: SessionStore,
                private authDataService: SessionDataService, 
                private authQuery: SessionQuery) { }

    login(creds) {
        console.log(`SessionService: Login with email: ${creds.email} and password: ${creds.password}.`);

        if (this.isLoggedIn()) {
            this.logout();
        }

        return this.authDataService.login(creds).pipe(
            tap(session => this.authStore.login(session)),
            tap(session => console.log(`SessionService: Received session with name ${session.name} and token: ${session.token}.`))
        );
    }

    logout(): void {
        console.log(`SessionService: Log out.`)
        this.authStore.logout();
    }

    isLoggedIn(): boolean {
        return this.authQuery.isLoggedIn();
    }

    currentToken(): string {
        return this.authQuery.getValue().token;
    }
}