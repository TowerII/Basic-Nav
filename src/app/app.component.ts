import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <main [style.marginLeft.px]="280">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      background: #f8f9fa;
      padding-top: 1rem;
    }

    @media (max-width: 768px) {
      main {
        margin-left: 0 !important;
        padding-top: 4rem;
      }
    }
  `]
})
export class AppComponent {}