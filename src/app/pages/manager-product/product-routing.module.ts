import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "../page404/page404.component";
import { ProductComponent } from "./product.component";

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
  },
  {
    path: "**",
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
