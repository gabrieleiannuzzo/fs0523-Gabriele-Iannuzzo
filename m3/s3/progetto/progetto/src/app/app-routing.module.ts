import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home | Weather App"
  },
  {
    path: "meteo",
    component: MeteoComponent,
    title: "Meteo | Weather App",
    canActivate: [AuthGuard],
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
