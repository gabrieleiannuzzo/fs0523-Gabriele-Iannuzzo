import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './pages/post-non-attivi/post-non-attivi.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostAttiviComponent,
    PostNonAttiviComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
