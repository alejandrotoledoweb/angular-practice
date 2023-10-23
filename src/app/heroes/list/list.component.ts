import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['IronMan', 'Spiderman', 'Captain America'];
  public deletedElement?: string;

  deleteFirst(): void {
    this.deletedElement = this.heroNames.pop();
  }
}
