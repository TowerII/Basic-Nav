import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-content">
      <h1 class="page-title">Welcome to Tab 1</h1>
      <p class="page-description">
        This is the main section for Tab 1. Here you'll find comprehensive information about our primary services and features.
        Explore the sub-pages to learn more about specific aspects of this section.
      </p>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Available Sections</h2>
          <div class="list-group">
            <a routerLink="sub1" class="list-group-item list-group-item-action">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="mb-1">Tab 1.1 - Core Services Details</h5>
                  <p class="mb-1 text-muted">Explore our core service offerings</p>
                </div>
                <span class="badge bg-primary rounded-pill">→</span>
              </div>
            </a>
            <a routerLink="sub2" class="list-group-item list-group-item-action">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="mb-1">Tab 1.2 - Additional Resources</h5>
                  <p class="mb-1 text-muted">Find complementary materials and guides</p>
                </div>
                <span class="badge bg-primary rounded-pill">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }

    .card-title {
      color: #212529;
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    .list-group-item {
      border: 1px solid rgba(0,0,0,.125);
      padding: 1rem 1.25rem;
      transition: all 0.2s;
    }

    .list-group-item:hover {
      background-color: #f8f9fa;
      transform: translateY(-1px);
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }

    .badge {
      padding: 0.5rem;
      font-size: 1rem;
    }

    h5 {
      font-size: 1.1rem;
      font-weight: 500;
    }

    .text-muted {
      font-size: 0.9rem;
    }
  `]
})
export class Tab1Component {}