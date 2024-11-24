import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <h1 class="page-title">Welcome to Tab 3</h1>
      <p class="page-description">
        Tab 3 showcases our auxiliary services and support features. This section provides
        important supplementary information and resources for our users.
      </p>
      <div class="sub-pages">
        <h2>Available Sections:</h2>
        <ul>
          <li><a routerLink="sub1">Tab 3.1 - Support Resources</a></li>
          <li><a routerLink="sub2">Tab 3.2 - Additional Support</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .sub-pages {
      background: #fff;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .sub-pages h2 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .sub-pages ul {
      list-style: none;
      padding: 0;
    }
    .sub-pages li {
      margin: 0.75rem 0;
    }
    .sub-pages a {
      color: #3498db;
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.2s;
    }
    .sub-pages a:hover {
      color: #2980b9;
      text-decoration: underline;
    }
  `]
})
export class Tab3Component {}