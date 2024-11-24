import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <h1 class="page-title">Welcome to Tab 2</h1>
      <p class="page-description">
        Tab 2 represents our secondary feature set. This section contains valuable information about
        additional services and capabilities that complement our main offerings.
      </p>
      <div class="sub-pages">
        <h2>Available Sections:</h2>
        <ul>
          <li><a routerLink="sub1">Tab 2.1 - Secondary Services Overview</a></li>
          <li><a routerLink="sub2">Tab 2.2 - Advanced Topics</a></li>
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
export class Tab2Component {}