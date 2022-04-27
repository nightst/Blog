import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostComponent } from "./post/post.component";


const route: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: PostListComponent},
  {path: 'list/:id', component: PostComponent},
]

@NgModule({
  declarations: [HomeComponent, AboutComponent, PostListComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    MarkdownModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
