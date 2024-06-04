import { Component } from '@angular/core';
import { SideBarService } from '../services/side-bar.service';
import { MenuLink } from '../models/menu-link';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  links:MenuLink[] = [];
  selected:number = 0;
  selectedSubject :Subject<number> = new Subject();
  constructor(sidebarService:SideBarService , private router:Router){
    sidebarService.getLinks().subscribe((val:MenuLink[])=>{this.links =val;this.selected=1;
    });
    this.selectedSubject.subscribe(x=>{this.selected=x;});
  }
  selectMenu(value:number,url:string){
    this.selectedSubject.next(value);
    this.router.navigate([url]);
  }
}
