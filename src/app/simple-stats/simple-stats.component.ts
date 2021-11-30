import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-stats',
  templateUrl: './simple-stats.component.html',
  styleUrls: ['./simple-stats.component.sass']
})
export class SimpleStatsComponent implements OnInit {

  @Output() updateEmitter: EventEmitter<Map<string, Map<string, number>>> = new EventEmitter();

  stats: string[] = ["HP", "Armor", "MR", "BAT", "AS", "DMG"];
  statVals: number[] = Array(this.stats.length).fill(0);

  primary: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateStat(e: Event, i: number) {
    let val: number = Number((e.target as HTMLInputElement).value);
    this.statVals[i] = val;

    this.updateHero();
  }

  updatePrimary(e: Event) {
    let val: number = Number((e.target as HTMLSelectElement).value);
    this.primary = val;

    this.updateHero();
  }

  updateHero() {
    let hero: Map<string, Map<string, number>> = new Map();

    let x: Map<string, number> = new Map();

    for(let i = 0; i < this.stats.length; i++) {
      x.set((this.stats[i] == "BAT") ? "BAT" : `Base ${this.stats[i]}`, this.statVals[i]);
    }
    x.set("Primary", this.primary);
    hero.set("Stats", x);

    this.updateEmitter.emit(hero);
  }

}
