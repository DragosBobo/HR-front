import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SideBarService } from '../services/side-bar.service';
import { MenuLink } from '../models/menu-link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isScaled = false;
  isLoading = false;
  selectedSubject :Subject<number> = new Subject();
  selected : number = 0;
  links : MenuLink[] = [];
  link :MenuLink = {url:'',text:'',icon:'',id:1};
  private sidebar: SideBarService;

 constructor(sidebar  : SideBarService ){
  this.selectedSubject.subscribe(x=>{this.selected=x;console.log(this.selected)});
  this.sidebar = sidebar;
 
}
  selectMenu(value:number){
    this.selectedSubject.next(value);
   
    switch (this.selected) {
      case 1 : {
        this.links.push({url:'personal-firma',text:' Personal firma',icon:'',id:1});
        this.links.push({url:'',text:' Personal unitate',icon:'',id:2});
        this.links.push({url:'',text:' Personal general',icon:'',id:3});
        this.links.push({url:'',text:' Personal statistica',icon:'',id:4});
        break;
      }
      case 2 : {
        this.links.push({url:'',text:'Rapoarte test',icon:'',id:1});
        this.links.push({url:'',text:'Rapoarte test',icon:'',id:2});
        break;
      }
     }
     this.sidebar.addLinks(this.links);
     this.links = [];
  }






}
