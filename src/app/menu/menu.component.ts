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
  this.MenuLinks.push({url:'secured/administrare',text:'Administrare',icon:'supervisor_account',id:1})
  this.MenuLinks.push({url:'secured/rapoarte',text:'Rapoarte',icon:'signal_cellular_alt',id:2})
  this.MenuLinks.push({url:'secured/fisiere',text:'Fisiere',icon:'file_copy ',id:3})
  this.MenuLinks.push({url:'secured/angajati',text:'Angajati',icon:'assignment_ind',id:4})
    
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
        this.links.push({url:'secured/raportare/test',text:'Rapoarte test',icon:'',id:2});
        break;
      }
      case 3:{
        this.links.push({url:'secured/fisiere/istoric-acte',text:'Istoric',icon:'',id:1});
        this.links.push({url:'secured/fisiere/fise-de-post',text:'Fise de post',icon:'',id:2});
        this.links.push({url:'secured/fisiere/cv',text:'CV-uri',icon:'',id:3});
        
        break;

      }
      case 4:{
        this.links.push({url:'secured/angajati/lista-angajati',text:'Lista angajati ',icon:'',id:1});
        this.links.push({url:'secured/angajati/evolutie',text:'Evolutie ',icon:'',id:2});
        this.links.push({url:'secured/angajati/cv',text:'CV-uri',icon:'',id:3});
        
        break;

      }
     }
     this.sidebar.addLinks(this.links);
     this.links = [];
     console.log(url);
     this.router.navigate([url]);
  }

  





}
