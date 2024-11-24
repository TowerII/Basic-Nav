import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Tab1Component } from './pages/tab1/tab1.component';
import { Tab1Sub1Component } from './pages/tab1/tab1-sub1.component';
import { Tab1Sub2Component } from './pages/tab1/tab1-sub2.component';
import { Tab2Component } from './pages/tab2/tab2.component';
import { Tab2Sub1Component } from './pages/tab2/tab2-sub1.component';
import { Tab2Sub2Component } from './pages/tab2/tab2-sub2.component';
import { Tab3Component } from './pages/tab3/tab3.component';
import { Tab3Sub1Component } from './pages/tab3/tab3-sub1.component';
import { Tab3Sub2Component } from './pages/tab3/tab3-sub2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab1/sub1', component: Tab1Sub1Component },
  { path: 'tab1/sub2', component: Tab1Sub2Component },
  { path: 'tab2', component: Tab2Component },
  { path: 'tab2/sub1', component: Tab2Sub1Component },
  { path: 'tab2/sub2', component: Tab2Sub2Component },
  { path: 'tab3', component: Tab3Component },
  { path: 'tab3/sub1', component: Tab3Sub1Component },
  { path: 'tab3/sub2', component: Tab3Sub2Component }
];