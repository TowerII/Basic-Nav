import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2-sub2',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <a routerLink="/tab2" class="back-link">← Back to Tab 2</a>
      <h1 class="page-title">Tab 2.2</h1>
      <p class="page-description">
        In this second sub-section of Tab 2, we explore advanced topics and additional resources
        related to our secondary service offerings.
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
export class Tab2Sub2Component {}