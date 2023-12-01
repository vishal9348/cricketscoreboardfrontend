import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo:"/home",
    pathMatch:"full"
  },
  { path: 'home', component: HomeComponent, title: 'Score Board - Home' },
  {
    path: 'history',
    component: HistoryComponent,
    title: 'Score Board - History',
  },
  {
    path: 'live',
    component: LiveComponent,
    title: 'Score Board - live-matches',
  },
  {
    path: 'point-table',
    component: PointTableComponent,
    title: 'Score Board - Point Table',
  },
];
