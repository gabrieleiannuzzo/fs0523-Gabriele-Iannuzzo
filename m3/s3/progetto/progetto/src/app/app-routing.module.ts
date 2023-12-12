import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { GridComponent } from './pages/meteo/grid/grid.component';
import { ListComponent } from './pages/meteo/list/list.component';

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
    children: [
      {
        path: "",
        redirectTo: "grid",
        pathMatch: "full",
      },
      {
        path: "grid",
        component: GridComponent,
        title: "Meteo | Weather App",
      },
      {
        path: "list",
        component: ListComponent,
        title: "Meteo | Weather App",
      },
    ]
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
