import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { CRISES } from '../mock-crisis';

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {

  static nextCrisisId = 100;

  getCrises() {
    return Promise.resolve(CRISES);
  }

  getCrisis(id: number | string) {
    return crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string) {
    name = name.trim();


    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }

  constructor() {}

}
