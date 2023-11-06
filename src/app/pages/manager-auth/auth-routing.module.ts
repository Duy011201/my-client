import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "../page404/page404.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "@app/pages/manager-auth/forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: "login",
    title: 'login page',
    component: LoginComponent,
  },
  {
    path: "register",
    title: 'register page',
    component: RegisterComponent,
  },
  {
    path: "forgot-password",
    title: 'forgot password page',
    component: ForgotPasswordComponent,
  },
  {
    path: "**",
    title: 'not found page',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
