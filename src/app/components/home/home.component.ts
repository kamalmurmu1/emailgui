import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snack:MatSnackBar){}
  btnClick(){
    console.log("Button Click");
    this.snack.open("Hey Welcome to this app");
  }

}
