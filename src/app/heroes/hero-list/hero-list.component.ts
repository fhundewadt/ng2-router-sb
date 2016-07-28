import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';

@Component({
  moduleId: module.id,
  selector: 'app-hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css'],
})
export class HeroListComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private heroService:HeroService,
              private router:Router) {
  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(result => this.heroes = result);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    let link = ['/hero', hero.id];
    this.router.navigate(link);
  }
}
