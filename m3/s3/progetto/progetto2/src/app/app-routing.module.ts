import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeteoComponent } from './pages/meteo/meteo.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home | Weather App"
  },
  {
    path: "meteo",
    component: MeteoComponent,
    title: "Meteo | Weather App"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }