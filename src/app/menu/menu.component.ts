import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isScaled = false;
  isLoading = false;
  
  onButtonClick() {
    this.isScaled = !this.isScaled;
    
    setTimeout((()=>this.isLoading = !this.isLoading),400);
    setTimeout(()=>{},1000);
  }
}
