import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { NavItem } from '../models/nav-item.interface';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-panel" [class.open]="isOpen">
      <div class="admin-header">
        <h2>Navigation Settings</h2>
        <button class="close-btn" (click)="close()">×</button>
      </div>
      <div class="admin-content">
        <div *ngFor="let item of navItems; let i = index" class="nav-item-edit">
          <div class="item-header">
            <input [(ngModel)]="item.label" 
                   (change)="updateNavigation()"
                   class="edit-input"
                   [placeholder]="'Tab ' + (i + 1)">
          </div>
          <div class="sub-items">
            <div *ngFor="let child of item.children" class="sub-item-edit">
              <input [(ngModel)]="child.label"
                     (change)="updateNavigation()"
                     class="edit-input"
                     [placeholder]="'Subtab'">
            </div>
          </div>
        </div>
      </div>
      <div class="admin-footer">
        <button class="save-btn" (click)="close()">Close</button>
      </div>
    </div>
    <div *ngIf="isOpen" class="overlay" (click)="close()"></div>
  `,
  styles: [`
    .admin-panel {
      position: fixed;
      right: -400px;
      top: 0;
      width: 400px;
      height: 100vh;
      background: white;
      box-shadow: -2px 0 8px rgba(0,0,0,0.1);
      transition: right 0.3s ease;
      z-index: 1040;
      display: flex;
      flex-direction: column;
    }

    .admin-panel.open {
      right: 0;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1035;
    }

    .admin-header {
      padding: 1rem;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .admin-header h2 {
      margin: 0;
      font-size: 1.25rem;
      color: #212529;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      color: #6c757d;
    }

    .admin-content {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
    }

    .nav-item-edit {
      margin-bottom: 1.5rem;
      background: #f8f9fa;
      border-radius: 0.5rem;
      padding: 1rem;
    }

    .item-header {
      margin-bottom: 1rem;
    }

    .sub-items {
      padding-left: 1.5rem;
    }

    .sub-item-edit {
      margin-bottom: 0.75rem;
    }

    .edit-input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #dee2e6;
      border-radius: 0.25rem;
      font-size: 0.95rem;
    }

    .edit-input:focus {
      outline: none;
      border-color: #0d6efd;
      box-shadow: 0 0 0 0.2rem rgba(13,110,253,.25);
    }

    .admin-footer {
      padding: 1rem;
      background: #f8f9fa;
      border-top: 1px solid #dee2e6;
      display: flex;
      justify-content: flex-end;
    }

    .save-btn {
      padding: 0.5rem 1rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .save-btn:hover {
      background: #0b5ed7;
    }
  `]
})
export class AdminPanelComponent {
  isOpen = false;
  navItems: NavItem[] = [];

  constructor(private navigationService: NavigationService) {
    this.navItems = this.navigationService.getNavItems();
  }

  updateNavigation(): void {
    this.navigationService.updateNavItems(this.navItems);
  }

  close(): void {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }
}