import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostListComponent } from "./post-list/post-list.component";
import { Post1Component } from "./posts/post1/post1.component";
import { Post10Component } from "./posts/post10/post10.component";
import { Post11Component } from "./posts/post11/post11.component";
import { Post12Component } from "./posts/post12/post12.component";
import { Post13Component } from "./posts/post13/post13.component";
import { Post14Component } from "./posts/post14/post14.component";
import { Post15Component } from "./posts/post15/post15.component";
import { Post16Component } from "./posts/post16/post16.component";
import { Post17Component } from "./posts/post17/post17.component";
import { Post18Component } from "./posts/post18/post18.component";
import { Post19Component } from "./posts/post19/post19.component";
import { Post2Component } from "./posts/post2/post2.component";
import { Post20Component } from "./posts/post20/post20.component";
import { Post21Component } from "./posts/post21/post21.component";
import { Post22Component } from "./posts/post22/post22.component";
import { Post23Component } from "./posts/post23/post23.component";
import { Post24Component } from "./posts/post24/post24.component";
import { Post25Component } from "./posts/post25/post25.component";
import { Post3Component } from "./posts/post3/post3.component";
import { Post4Component } from "./posts/post4/post4.component";
import { Post5Component } from "./posts/post5/post5.component";
import { Post6Component } from "./posts/post6/post6.component";
import { Post7Component } from "./posts/post7/post7.component";
import { Post8Component } from "./posts/post8/post8.component";
import { Post9Component } from "./posts/post9/post9.component";


const route: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: PostListComponent},
  {path: 'list/1', component: Post1Component},
  {path: 'list/2', component: Post2Component},
  {path: 'list/3', component: Post3Component},
  {path: 'list/4', component: Post4Component},
  {path: 'list/5', component: Post5Component},
  {path: 'list/6', component: Post6Component},
  {path: 'list/7', component: Post7Component},
  {path: 'list/8', component: Post8Component},
  {path: 'list/9', component: Post9Component},
  {path: 'list/10', component: Post10Component},
  {path: 'list/11', component: Post11Component},
  {path: 'list/12', component: Post12Component},
  {path: 'list/13', component: Post13Component},
  {path: 'list/14', component: Post14Component},
  {path: 'list/15', component: Post15Component},
  {path: 'list/16', component: Post16Component},
  {path: 'list/17', component: Post17Component},
  {path: 'list/18', component: Post18Component},
  {path: 'list/19', component: Post19Component},
  {path: 'list/20', component: Post20Component},
  {path: 'list/21', component: Post21Component},
  {path: 'list/22', component: Post22Component},
  {path: 'list/23', component: Post23Component},
  {path: 'list/24', component: Post24Component},
  {path: 'list/25', component: Post25Component},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [HomeComponent, AboutComponent, PostListComponent, PageNotFoundComponent, Post1Component, Post2Component, Post3Component, Post4Component, Post6Component, Post7Component, Post8Component, Post9Component, Post10Component, Post11Component, Post12Component, Post13Component, Post14Component, Post15Component, Post16Component, Post17Component, Post18Component],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    MarkdownModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
