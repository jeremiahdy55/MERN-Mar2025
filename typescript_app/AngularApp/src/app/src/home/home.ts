import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  count:number = 0;
  count2:number = 0;
  
  @Input() numberData : number = 0;
  @Output() numberDataChange : EventEmitter<number> = new EventEmitter();

  handleDecrement() {
    this.count2 -= 1;
  }

  handleIncrement() {
    this.count2 += 1;
  }

  handleDecrement2() {
    this.numberData = this.numberData - 1; // doing data manipulation
    this.numberDataChange.emit(this.numberData); // sending data back to parent component
  }

  handleIncrement2() {
    this.numberData = this.numberData + 1; // doing data manipulation
    this.numberDataChange.emit(this.numberData); // sending data back to parent component
  }
}
