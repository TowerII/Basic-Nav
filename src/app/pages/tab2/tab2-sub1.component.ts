import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2-sub1',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <a routerLink="/tab2" class="back-link">← Back to Tab 2</a>
      <h1 class="page-title">Tab 2.1</h1>
      <p class="page-description">
        The first sub-section of Tab 2 delves into specific aspects of our secondary services.
        Here you'll find detailed information about specialized features and capabilities.
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
export class Tab2Sub1Component {}