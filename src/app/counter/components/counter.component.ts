import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  public title: string = 'Counter Component';
  public counter: number = 10;

  // constructor() {}

  increaseBy(): void {
    this.counter += 1;
  }

  reset(): void {
    this.counter = 0;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }
}
