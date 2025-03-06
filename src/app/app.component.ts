import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imagePath = 'assets/Logo.png';
  url='https://www.bridgelabz.com';
  userName: String ="";
  errorMessage: string = '';


  ngOnInit(): void{
    this.title="Hello from bridgelabz."
  }

  onClick(){
    alert("Image clicked!");
    console.log("save button is clicked");
    window.open(this.url, "_blank");
  }

  validateUserName() {
    console.log("User entered:", this.userName);  // Check if input is detected
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;  

    if (!this.userName.match(namePattern)) {
      this.errorMessage = 'Name must start with a capital letter and have at least 3 letters.';
      console.log("Validation failed:", this.errorMessage);
    } else {
      this.errorMessage = '';
      console.log("Validation passed! Name:", this.userName);
    }
  }
}
