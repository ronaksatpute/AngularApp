import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})

export class Roles {
  //string, number, boolean, any, void, null, undefined, never, object, date, array, tuple, enum, interface, type, class, function, symbol, bigint
  firstName: string = 'John';
  angularversion = "Version 18";
  version: number = 1.0;
  isActive: boolean = true;
  currentDate: Date = new Date();

  showWelcomeMessage(){
    alert("Welcome to Angular")
  }

  showMessage(message: string){
    alert(message)
  }
}
