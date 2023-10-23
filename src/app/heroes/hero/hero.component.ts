import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'peter';
  public age: number = 35;

  get nameCapitalize(): string {
    return this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
  }

  getFullDescription(): string {
    return `${this.name} + ${this.age}`;
  }

  changeHero(newName: string = 'Tony'): void {
    this.name = newName;
  }

  changeAge(): void {
    this.age = 15;
  }
}
