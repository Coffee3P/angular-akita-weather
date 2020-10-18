import { Query, toBoolean } from "@datorama/akita";
import { Injectable } from '@angular/core';
import { SessionState, SessionStore } from "./session.store";

export class SessionQuery extends Query<SessionState> {
    isLoggedIn$ = this.select(state => toBoolean(state.token));
    name$ = this.select(state => state.name);

    constructor(protected store: SessionStore) {
        super(store);
    }
}