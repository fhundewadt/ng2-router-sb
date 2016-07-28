import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-crisis-admin',
  templateUrl: 'crisis-admin.component.html',
  styleUrls: ['crisis-admin.component.css'],
})
export class CrisisAdminComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor(private router: Router) {}

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.router
      .routerState
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.router
      .routerState
      .fragment
      .map(fragment => fragment || 'None');
  }
}
