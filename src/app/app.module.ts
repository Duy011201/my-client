import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from './pages/home/home.component';
import {Page404Component} from './pages/page404/page404.component';
import {ProductComponent} from './pages/manager-product/product.component';
import {UserComponent} from './pages/manager-user/user.component';
import {LoginComponent} from './pages/manager-auth/login/login.component';
import {RegisterComponent} from './pages/manager-auth/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Page404Component, ProductComponent, UserComponent, LoginComponent, RegisterComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
