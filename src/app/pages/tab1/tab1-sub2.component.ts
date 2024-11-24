import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1-sub2',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <a routerLink="/tab1" class="back-link">← Back to Tab 1</a>
      <h1 class="page-title">Tab 1.2</h1>
      <p class="page-description">
        This is the second sub-section of Tab 1. Here you'll find additional resources and complementary
        information to enhance your understanding of our primary services.
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
export class Tab1Sub2Component {}