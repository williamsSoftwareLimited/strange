import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "articles", loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: "designpatterns", component: DesignPatternsComponent },
  { path: "blog", loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
