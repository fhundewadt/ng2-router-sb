import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-product-admin',
  templateUrl: 'product-admin.component.html',
  styleUrls: ['product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  sessionId:Observable<string>;
  token:Observable<string>;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.sessionId = this.router
      .routerState
      .queryParams
      .map(params => params['session_id'] || 'None');

    this.token = this.router
      .routerState
      .fragment
      .map(fragment => fragment || 'None');
  }

}
