import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CrisisService } from './shared/crisis.service';

@Component({
  moduleId: module.id,
  selector: 'app-crisis-center',
  templateUrl: 'crisis-center.component.html',
  styleUrls: ['crisis-center.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CrisisService],
})
export class CrisisCenterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
