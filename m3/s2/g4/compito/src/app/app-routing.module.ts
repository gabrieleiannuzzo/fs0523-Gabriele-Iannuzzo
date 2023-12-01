import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './pages/post-non-attivi/post-non-attivi.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home | Social"
  },
  {
    path: "posts",
    component: PostsComponent,
    title: "Posts | Social",
    children: [
      {
        path: "post-attivi",
        component: PostAttiviComponent,
        title: "Post attivi | Social"
      },
      {
        path: "post-non-attivi",
        component: PostNonAttiviComponent,
        title: "Post non attivi | Social"
      },
    ]
  },
  {
    path: "users",
    component: UsersComponent,
    title: "Users | Social"
  },
  {
    path: "**",
    redirectTo: "",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
