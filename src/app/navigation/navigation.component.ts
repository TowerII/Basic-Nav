import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPanelComponent } from '../admin/admin-panel.component';
import { NavigationService } from '../services/navigation.service';
import { NavItem } from '../models/nav-item.interface';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, AdminPanelComponent],
  template: `
    <nav [class.mobile-open]="isMobileMenuOpen">
      <div class="nav-header">
        <a routerLink="/" class="logo-link">
          <picture>
            <source media="(max-width: 768px)" srcset="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='8' fill='%230D6EFD'/%3E%3Cpath d='M8 16H24M16 8L16 24' stroke='white' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E">
            <img src="data:image/svg+xml,%3Csvg width='120' height='32' viewBox='0 0 120 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='8' fill='%230D6EFD'/%3E%3Cpath d='M8 16H24M16 8L16 24' stroke='white' stroke-width='2.5' stroke-linecap='round'/%3E%3Ctext x='40' y='22' font-family='Arial' font-size='16' fill='%23212529'%3ENavDemo%3C/text%3E%3C/svg%3E" 
                 alt="Logo" 
                 class="logo">
          </picture>
        </a>
        <button class="menu-toggle" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul class="nav-list">
        <li *ngFor="let item of navItems$ | async" 
            [class.active]="isActive(item)"
            (mouseenter)="onHover(item)"
            (mouseleave)="onLeave()">
          <a [routerLink]="item.route" 
             [class.active]="isActive(item)"
             (click)="onItemClick(item)">
            {{ item.label }}
          </a>
          <ul *ngIf="item.children && (hoveredItem === item || isActive(item))" 
              class="sub-nav">
            <li *ngFor="let child of item.children">
              <a [routerLink]="child.route" 
                 [class.active]="isChildActive(child)">
                {{ child.label }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="nav-footer">
        <button class="admin-btn" (click)="openAdminPanel()">
          <i class="settings-icon">⚙</i> Navigation Settings
        </button>
      </div>
    </nav>
    <app-admin-panel #adminPanel></app-admin-panel>
  `,
  styles: [`
    nav {
      width: 280px;
      height: 100vh;
      background: #ffffff;
      color: #212529;
      position: fixed;
      left: 0;
      top: 0;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      z-index: 1030;
    }

    .nav-header {
      padding: 1rem;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-link {
      text-decoration: none;
      display: block;
    }

    .logo {
      height: 32px;
      width: auto;
      display: block;
    }

    .nav-list {
      list-style: none;
      padding: 1rem 0;
      overflow-y: auto;
      margin: 0;
      flex: 1;
    }

    .nav-list li {
      margin: 0;
    }

    .nav-list a {
      color: #6c757d;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      display: block;
      transition: all 0.2s;
      font-weight: 500;
    }

    .nav-list a:hover {
      color: #0d6efd;
      background-color: #f8f9fa;
    }

    .nav-list a.active {
      color: #0d6efd;
      background-color: rgba(13, 110, 253, 0.1);
    }

    .sub-nav {
      list-style: none;
      background-color: #f8f9fa;
      border-left: 3px solid #dee2e6;
      margin: 0.5rem 0;
      padding: 0;
    }

    .sub-nav a {
      padding-left: 2.5rem;
      font-size: 0.95rem;
    }

    .nav-footer {
      padding: 1rem;
      border-top: 1px solid #dee2e6;
    }

    .admin-btn {
      width: 100%;
      padding: 0.75rem;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 0.375rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all 0.2s;
    }

    .admin-btn:hover {
      background: #e9ecef;
      border-color: #ced4da;
    }

    .settings-icon {
      font-style: normal;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .menu-toggle span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: #212529;
      margin: 4px 0;
      transition: all 0.3s;
    }

    @media (max-width: 768px) {
      nav {
        transform: translateX(-100%);
      }

      nav.mobile-open {
        transform: translateX(0);
      }

      .menu-toggle {
        display: block;
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1031;
      }

      .mobile-open .menu-toggle span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .mobile-open .menu-toggle span:nth-child(2) {
        opacity: 0;
      }

      .mobile-open .menu-toggle span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  `]
})
export class NavigationComponent {
  @ViewChild('adminPanel') adminPanel!: AdminPanelComponent;
  
  hoveredItem: NavItem | null = null;
  isMobileMenuOpen = false;
  navItems$ = this.navigationService.getNavItems$();

  constructor(private navigationService: NavigationService) {}

  onHover(item: NavItem): void {
    this.hoveredItem = item;
  }

  onLeave(): void {
    this.hoveredItem = null;
  }

  isActive(item: NavItem): boolean {
    return location.pathname.startsWith(item.route);
  }

  isChildActive(child: NavItem): boolean {
    return location.pathname === child.route;
  }

  onItemClick(item: NavItem): void {
    if (window.innerWidth <= 768) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openAdminPanel(): void {
    this.adminPanel.open();
  }
}