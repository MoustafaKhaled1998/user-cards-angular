import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInterface } from './user-interface/user-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInterface],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'users-cards';
}
