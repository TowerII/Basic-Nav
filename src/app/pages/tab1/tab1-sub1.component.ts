import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1-sub1',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <a routerLink="/tab1" class="back-link">← Back to Tab 1</a>
      <h1 class="page-title">Tab 1.1</h1>
      <p class="page-description">
        Welcome to the first sub-section of Tab 1. This area focuses on detailed aspects of our core services,
        providing in-depth information and resources for specific use cases.
      </p>
    </div>
  `,
  styles: [`
    .back-link {
      display: inline-block;
      margin-bottom: 1rem;
      color: #3498db;
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.2s;
    }
    .back-link:hover {
      color: #2980b9;
      text-decoration: underline;
    }
  `]
})
export class Tab1Sub1Component {}