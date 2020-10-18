import { Query, toBoolean } from "@datorama/akita";
import { SessionState, SessionStore } from "./session.store";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
    isLoggedIn$ = this.select(state => toBoolean(state.token));
    name$ = this.select(state => state.name);

    constructor(protected store: SessionStore) {
        super(store);
    }
}