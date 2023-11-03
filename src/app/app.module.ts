import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from './pages/home/home.component';
import {Page404Component} from './pages/page404/page404.component';
import {ProductComponent} from './pages/product/product.component';
import {UserComponent} from './pages/user/user.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Page404Component, ProductComponent, UserComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
