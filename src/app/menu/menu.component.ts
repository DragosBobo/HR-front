import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SideBarService } from '../services/side-bar.service';
import { MenuLink } from '../models/menu-link';
import { Router } from '@angular/router';

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
  MenuLinks : MenuLink[] = [];
  constructor(sidebar  : SideBarService , private router:Router){
  this.selectedSubject.subscribe(x=>{this.selected=x;console.log(this.selected)});
  this.sidebar = sidebar;
  

  //populate menu main 
  this.MenuLinks.push({url:'secured/administrare',text:'Administrare',icon:'',id:1})
  this.MenuLinks.push({url:'secured/rapoarte',text:'Rapoarte',icon:'',id:2})
  this.MenuLinks.push({url:'secured/fisiere',text:'Fisiere',icon:'',id:3})

}
  selectMenu(value:number,url:string){
    this.selectedSubject.next(value);
   
    switch (this.selected) {
      case 1 : {
        this.links.push({url:'secured/administrare/firma',text:'Lista Firme',icon:'',id:1});
        this.links.push({url:'secured/administrare/utilizatori',text:'Lista utilizatori',icon:'',id:2});
      
        break;
      }
      case 2 : {
        this.links.push({url:'secured/raportare/test',text:'Rapoarte test',icon:'',id:1});
        this.links.push({url:'',text:'Rapoarte test',icon:'',id:2});
        break;
      }
     }
     this.sidebar.addLinks(this.links);
     this.links = [];
     console.log(url);
     this.router.navigate([url]);
  }

  





}
