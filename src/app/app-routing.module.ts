import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostListComponent } from "./post-list/post-list.component";
import { Post1Component } from "./posts/post1/post1.component";
import { Post2Component } from "./posts/post2/post2.component";
import { Post3Component } from "./posts/post3/post3.component";
import { Post4Component } from "./posts/post4/post4.component";


const route: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: PostListComponent},
  {path: 'list/1', component: Post1Component},
  {path: 'list/2', component: Post2Component},
  {path: 'list/3', component: Post3Component},
  {path: 'list/4', component: Post4Component},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [HomeComponent, AboutComponent, PostListComponent, PageNotFoundComponent, Post1Component, Post2Component, Post3Component, Post4Component],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    MarkdownModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
