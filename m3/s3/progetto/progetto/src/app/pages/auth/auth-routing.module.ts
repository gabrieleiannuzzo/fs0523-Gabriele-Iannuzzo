import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Weather App",
    canActivate: [LoginGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register | Weather app",
    canActivate: [LoginGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
