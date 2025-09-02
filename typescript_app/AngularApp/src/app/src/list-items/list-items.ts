import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-items.html',
  styleUrl: './list-items.sass'
})
export class ListItems {
  items: string[] = ["item 1", "item 2", "item 3"];
  newItem: string = "";

  // event addItem()
  addItem() {
    // use JS truthy check
    // check if there is a string value other than empty whitespace
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = ""; // reset the newItem string
    }
  }
}
