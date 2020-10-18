import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from '@angular/core';

export type SessionState = {
    token: string;
    name: string;
}

export function createInitialSessionState(): SessionState {
    return {
        token: null,
        name: null
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
    constructor() {
        super(createInitialSessionState());
    }

    login(session: SessionState): void {
        console.log(`Did login with name: ${session.name} and token: ${session.token}`);
        this.update(session);
    }

    logout(): void {
        console.log('Did log out.');
        this.update(createInitialSessionState());
    }
}