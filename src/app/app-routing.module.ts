import {NgModule} from "@angular/core";
<<<<<<< HEAD
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {Page404Component} from "./pages/page404/page404.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/manager-product/product.module').then((m) => m.ProductModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/manager-user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/manager-auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '**',
    component: Page404Component
  }
=======
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {Page404Component} from "./pages/page404/page404.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthGuard} from "./core/service/auth-guard.service";
import {CONST} from "@app/core/const/constant";

const routes: Routes = [
  {
    path: CONST.URL_HOME,
    title: "home page",
    component: HomeComponent,
  },
  {
    path: CONST.URL_DASHBOARD,
    title: "dashboard page",
    component: DashboardComponent,
  },
  {
    path: CONST.URL_USER,
    title: "user page",
    loadChildren: () =>
      import("./pages/manager-user/user.module").then(m => m.UserModule),
  },
  {
    path: CONST.URL_AUTH,
    title: "auth page",
    loadChildren: () =>
      import("./pages/manager-auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: CONST.URL_BLOG,
    title: "blog page",
    loadChildren: () =>
      import("./pages/manager-blog/blog.module").then(m => m.BlogModule),
  },
  {
    path: CONST.URL_404,
    title: 'not found page',
    component: Page404Component,
  },
>>>>>>> dev
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
