import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab3-sub1',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <a routerLink="/tab3" class="back-link">← Back to Tab 3</a>
      <h1 class="page-title">Tab 3.1</h1>
      <p class="page-description">
        The first sub-section of Tab 3 focuses on specific support resources and tools.
        Here you'll find detailed guidance and assistance for common scenarios.
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
export class Tab3Sub1Component {}