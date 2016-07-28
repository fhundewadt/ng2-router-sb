import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Crisis } from '../shared/crisis';
import { CrisisService } from '../shared/crisis.service';

@Component({
  moduleId: module.id,
  selector: 'app-crisis-list',
  templateUrl: 'crisis-list.component.html',
  styleUrls: ['crisis-list.component.css']
})
export class CrisisListComponent implements OnInit, OnDestroy {
  crises:Crisis[];

  private selectedId:number;
  private sub:any;

  constructor(private crisisService:CrisisService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  isSelected(crisis:Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.sub = this.activatedRoute
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.crisisService.getCrises()
          .then(crises => this.crises = crises);
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSelect(crisis:Crisis) {
    // Navigate with Absolute link
    this.router.navigate(['/crisis-center', crisis.id]);
  }
}
