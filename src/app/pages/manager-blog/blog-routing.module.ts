import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Page404Component} from "../page404/page404.component";
import {CONST} from "@app/core/const/constant";
import {BlogComponent} from "@app/pages/manager-blog/blog.component";

const routes: Routes = [
  {
    path: '',
    title: 'blog page',
    component: BlogComponent,
  },
  {
    path: CONST.URL_404,
    title: 'not found page',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}
