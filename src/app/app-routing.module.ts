import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostListComponent } from "./post-list/post-list.component";
import { Post0Component } from "./posts/post0/post0.component";
import { Post1Component } from "./posts/post1/post1.component";


const route: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: PostListComponent},
  {path: 'list/0', component: Post0Component},
  {path: 'list/1', component: Post1Component},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [HomeComponent, AboutComponent, PostListComponent, PageNotFoundComponent, Post0Component, Post1Component],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    MarkdownModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
