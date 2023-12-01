import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './pages/post-non-attivi/post-non-attivi.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home | Social",
  },
  {
    path: "post-attivi",
    component: PostAttiviComponent,
    title: "Post attivi | Social",
  },
  {
    path: "post-non-attivi",
    component: PostNonAttiviComponent,
    title: "Post non attivi | Social",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
