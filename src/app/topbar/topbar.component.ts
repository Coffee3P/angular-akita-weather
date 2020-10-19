import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from '../state/session.query';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  currentUsersName$: Observable<string>;
  userIsLoggedIn$: Observable<boolean>;

  constructor(private authQuery: SessionQuery, 
    private authService: SessionService) { }

  ngOnInit(): void {
    this.currentUsersName$ = this.authQuery.name$;
    this.userIsLoggedIn$ = this.authQuery.isLoggedIn$;
  }

  logout(): void {
    this.authService.logout()
  }
}
