<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "../page404/page404.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: Page404Component
  }
=======
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Page404Component} from "../page404/page404.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "@app/pages/manager-auth/forgot-password/forgot-password.component";
import {CONST} from "@app/core/const/constant";

const routes: Routes = [
  {
    path: CONST.URL_LOGIN,
    title: 'login page',
    component: LoginComponent,
  },
  {
    path: CONST.URL_REGISTER,
    title: 'register page',
    component: RegisterComponent,
  },
  {
    path: CONST.URL_FORGOT_PASSWORD,
    title: 'forgot password page',
    component: ForgotPasswordComponent,
  },
  {
    path: CONST.URL_404,
    title: 'not found page',
    component: Page404Component,
  },
>>>>>>> dev
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> dev
})
export class AuthRoutingModule {
}
