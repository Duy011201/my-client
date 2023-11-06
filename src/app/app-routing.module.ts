import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { Page404Component } from "./pages/page404/page404.component";

const routes: Routes = [
  {
    path: "",
    title: "home page",
    component: HomeComponent,
  },
  {
    path: "user",
    title: "user page",
    loadChildren: () =>
      import("./pages/manager-user/user.module").then(m => m.UserModule),
  },
  {
    path: "auth",
    title: "auth page",
    loadChildren: () =>
      import("./pages/manager-auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "**",
    title: 'not found page',
    component: Page404Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
