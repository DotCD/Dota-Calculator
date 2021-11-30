import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  @Output() updateEmitter: EventEmitter<Map<string, Map<string, number>>> = new EventEmitter();

  stats: string[] = ["Agi", "Int", "Str", "Base HP", "Base Armor", "Base MR", "BAT", "Base AS", "Base DMG"];
  statVals: number[] = Array(this.stats.length).fill(0);

  items: string[] = ["Agi", "Int", "Str", "HP", "Armor", "MR", "Evasion", "AS", "DMG"];
  itemVals: number[] = Array(this.items.length).fill(0);

  primary: number = 0;

  constructor() { }

  ngOnInit(): void { }

  /* Take stat and item values then compile them into a map and send to parent */
  update(e: Event, isStat: boolean, i: number) {
    let val: number = Number((e.target as HTMLInputElement).value);
    
    if (isStat) {
      this.statVals[i] = val;
    } else {
      this.itemVals[i] = val;
    }

    let hero = this.contstructHero();
    this.updateEmitter.emit(hero);
  }

  updatePrimary(e: Event) {
    let val: number = Number((e.target as HTMLSelectElement).value);
    this.primary = val;

    let hero = this.contstructHero();
    this.updateEmitter.emit(hero);
  }

  contstructHero(): Map<string, Map<string, number>> {
    let hero: Map<string, Map<string, number>> = new Map();

    let x: Map<string, number> = new Map();

    for (let i = 0; i < this.stats.length; i++) {
          x.set(this.stats[i], this.statVals[i]);
    }
    x.set("Primary", this.primary);
    hero.set("Stats", x);

    x = new Map();

    for (let i = 0; i < this.items.length; i++) {
      x.set(this.items[i], this.itemVals[i]);
    }
    hero.set("Items", x);

    return hero;
  }

}
