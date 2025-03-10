import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Cloud {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  zIndex: number;
  lenght:string;
  height:string;
  id:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
isLoggedIn :boolean = false;
clouds: Cloud[] = [];
items: string[] = ['Management','System','Unity','Products'];
  constructor(private router:Router) { }
  emailFormControl = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    this.generateClouds(4);
  }

generateClouds(count: number): void {
  for (let i = 0; i < count; i++) {
    this.clouds.push(this.createRandomCloud(i));
  }
}

createRandomCloud(id:number): Cloud {
  const lenght = `${this.generateRandomSize(100,300)}px`;
  const height = `${this.generateRandomSize(50,100)}px`;

  const top = `${Math.floor(Math.random() * 80)}%`; // Random top position
  const left = `${Math.floor(Math.random() * -500)}px`; // Starts off screen
  const animationDuration = `${Math.floor(Math.random() * (40 - 25 + 1)) + 25}s`; // Random duration between 20s and 50s
  const animationDelay = `${0}s`; // Random delay up to 20s
  const zIndex = Math.floor(Math.random() * 10); // Random z-index
  return { top, left, animationDuration, animationDelay, zIndex ,lenght,height,id};
}
generateRandomSize(min: number, max: number): string {
  const size = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${size}px`;
}
login(){
  this.router.navigate(['secured'])

}
}
