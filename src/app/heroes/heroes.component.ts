import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];  
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  //sets parameter to a singleton instance of Hero Service 

  ngOnInit() {
    this.getHeroes
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }


}
