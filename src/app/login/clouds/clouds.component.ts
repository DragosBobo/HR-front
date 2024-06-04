import { Component, OnInit } from '@angular/core';

interface Cloud {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  zIndex: number;
}

@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent implements OnInit {
  clouds: Cloud[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateClouds(50);
  }

  generateClouds(count: number): void {
    for (let i = 0; i < count; i++) {
      this.clouds.push(this.createRandomCloud());
    }
  }

  createRandomCloud(): Cloud {
    const top = `${Math.floor(Math.random() * 80)}%`; // Random top position
    const left = `${Math.floor(Math.random() * -200)}px`; // Starts off screen
    const animationDuration = `${Math.floor(Math.random() * 30) + 20}s`; // Random duration between 20s and 50s
    const animationDelay = `${Math.floor(Math.random() * 20)}s`; // Random delay up to 20s
    const zIndex = Math.floor(Math.random() * 10); // Random z-index

    return { top, left, animationDuration, animationDelay, zIndex };
  }
}
