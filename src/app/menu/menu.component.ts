import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isScaled = false;
  isLoading = false;
  selectedSubject :Subject<number> = new Subject();
  selected : number = 1;
 constructor(){
  this.selectedSubject.subscribe(x=>{this.selected=x;console.log(this.selected)});
 }
  selectMenu(value:number){
    this.selectedSubject.next(value);
  }

}
