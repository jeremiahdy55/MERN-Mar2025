import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './src/components/home/home';
import { ListItems } from './src/components/list-items/list-items';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, ListItems],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('AngularApp');
  numberDataOutput = 9999;
}
