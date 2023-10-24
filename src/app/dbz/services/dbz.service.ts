import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 500 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  constructor() {}

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters = [...this.characters, newCharacter];
  }

  onDeleteId(id: string | undefined): void {
    this.characters = this.characters.filter((elem) => elem.id !== id);
  }
}
