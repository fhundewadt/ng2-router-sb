import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Crisis } from '../shared/crisis';
import { DialogService } from '../../shared/dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CrisisService } from '../shared/crisis.service';

@Component({
  moduleId: module.id,
  selector: 'app-crisis-detail',
  templateUrl: 'crisis-detail.component.html',
  styleUrls: ['crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis:Crisis;
  editName:string;
  private sub:any;

  constructor(private service:CrisisService,
              private router:Router,
              private route:ActivatedRoute,
              private dialogService:DialogService) {
  }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id = +params['id'];
        this.service.getCrisis(id)
          .then(crisis => {
            if (crisis) {
              this.editName = crisis.name;
              this.crisis = crisis;
            } else { // id not found
              this.gotoCrises();
            }
          });
      });
  }

  ngOnDestroy(){
    if (this.sub){
      this.sub.unsubscribe();
    }
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate():Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or flase when the user decides
    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the hero id if available
    // so that the CrisisListComponent can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    // Absolute link
    let link = ['/crisis-center', {id: crisisId, foo: 'foo'}];
    this.router.navigate(link);
  }
}
