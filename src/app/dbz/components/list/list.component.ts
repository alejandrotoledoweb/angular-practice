import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Truncks',
      power: 100,
    },
  ];

  @Output()
  public onDeleteId: EventEmitter<string | undefined> = new EventEmitter();

  onDeleteCharacter(index: string | undefined): void {
    console.log({ index });
    this.onDeleteId.emit(index);
  }
}
