import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imagePath = 'assets/Logo.png';
  url='https://www.bridgelabz.com';

  ngOnInit(): void{
    this.title="Hello from bridgelabz."
  }

  onClick(){
    alert("Image clicked!");
    console.log("save button is clicked");
    window.open(this.url, "_blank");
  }
}
