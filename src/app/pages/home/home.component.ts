import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page-content">
      <h1 class="page-title">Welcome to Our Platform</h1>
      <p class="page-description">
        Explore our comprehensive suite of services and features through the navigation menu.
        Each section provides detailed information and resources to help you make the most of our platform.
      </p>
      
      <div class="features-grid">
        <div class="feature-card">
          <h3>Core Services</h3>
          <p>Discover our primary offerings and essential features in Tab 1.</p>
        </div>
        <div class="feature-card">
          <h3>Additional Features</h3>
          <p>Explore complementary services and advanced capabilities in Tab 2.</p>
        </div>
        <div class="feature-card">
          <h3>Support & Resources</h3>
          <p>Access helpful resources and support materials in Tab 3.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .feature-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    .feature-card h3 {
      color: #2c3e50;
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      color: #6c757d;
      line-height: 1.6;
    }
  `]
})
export class HomeComponent {}