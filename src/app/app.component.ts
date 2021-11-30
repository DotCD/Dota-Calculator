import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dota-calc';

  advanced: boolean = false;
  hero: Map<string, Map<string, number>> = new Map();

  updateHero(hero: Map<string, Map<string, number>>) {
    this.hero = hero;
  }
}
