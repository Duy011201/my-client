import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {Page404Component} from "./pages/page404/page404.component";
import {ProductComponent} from "./pages/product/product.component";
import {UserComponent} from "./pages/user/user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
