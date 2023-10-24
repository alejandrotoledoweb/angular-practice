import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // public characters: Character[] = [
  //   { name: 'Krillin', power: 500 },
  //   { name: 'Goku', power: 9500 },
  //   { name: 'Vegeta', power: 7500 },
  // ];
  // onNewCharacter(character: Character): void {
  //   this.characters = [
  //     ...this.characters,
  //     { name: character.name, power: character.power },
  //   ];
  // }
  // onDeleteId(id: number): void {
  //   this.characters.splice(id, 1);
  // }

  // dbzService: DbzService;

  constructor(private dbzService: DbzService) {
    // this.dbzService = dbzService;
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteId(id: string | undefined): void {
    this.dbzService.onDeleteId(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
