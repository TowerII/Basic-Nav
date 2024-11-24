import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavItem } from '../models/nav-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navItems: NavItem[] = [
    {
      label: 'Tab 1',
      route: '/tab1',
      children: [
        { label: 'Tab 1.1', route: '/tab1/sub1' },
        { label: 'Tab 1.2', route: '/tab1/sub2' }
      ]
    },
    {
      label: 'Tab 2',
      route: '/tab2',
      children: [
        { label: 'Tab 2.1', route: '/tab2/sub1' },
        { label: 'Tab 2.2', route: '/tab2/sub2' }
      ]
    },
    {
      label: 'Tab 3',
      route: '/tab3',
      children: [
        { label: 'Tab 3.1', route: '/tab3/sub1' },
        { label: 'Tab 3.2', route: '/tab3/sub2' }
      ]
    }
  ];

  private navItemsSubject = new BehaviorSubject<NavItem[]>(this.navItems);

  getNavItems(): NavItem[] {
    return this.navItems;
  }

  getNavItems$(): Observable<NavItem[]> {
    return this.navItemsSubject.asObservable();
  }

  updateNavItems(items: NavItem[]): void {
    this.navItems = items;
    this.navItemsSubject.next(this.navItems);
  }
}