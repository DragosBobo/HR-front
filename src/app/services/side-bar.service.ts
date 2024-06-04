import { Injectable } from '@angular/core';
import { MenuLink } from '../models/menu-link';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
    
  private menuItemsSubject: Subject<MenuLink[]> = new Subject();

  constructor() { }

  addLinks(links: MenuLink[]) {
    this.menuItemsSubject.next(links);
    console.log(links);
  }

  getLinks(): Observable<MenuLink[]> {
    return this.menuItemsSubject.asObservable();
  }
}
