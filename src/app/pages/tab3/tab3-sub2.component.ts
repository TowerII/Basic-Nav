import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab3-sub2',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <a routerLink="/tab3" class="back-link">← Back to Tab 3</a>
      <h1 class="page-title">Tab 3.2</h1>
      <p class="page-description">
        This second sub-section of Tab 3 provides additional support materials and resources.
        Explore advanced topics and specialized assistance options here.
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
export class Tab3Sub2Component {}