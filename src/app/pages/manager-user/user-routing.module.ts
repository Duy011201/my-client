<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "../page404/page404.component";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: '**',
    component: Page404Component
  }
=======
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "../page404/page404.component";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
  },
  {
    path: "**",
    title: 'not found page',
    component: Page404Component,
  },
>>>>>>> dev
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule]
})
export class UserRoutingModule {
}
=======
  exports: [RouterModule],
})
export class UserRoutingModule {}
>>>>>>> dev
