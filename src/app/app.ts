import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Master } from './components/master/master';
import { Roles } from './components/roles/roles';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Master],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('AngularApp');
}
