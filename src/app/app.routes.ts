import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoPageComponent } from './info-page/info-page.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: "Home Page"
  },
  {
    path: "info",
    component: InfoPageComponent,
    title: "Info"
  }
];
