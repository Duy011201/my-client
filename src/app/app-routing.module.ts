import {NgModule} from "@angular/core";
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
