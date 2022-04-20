import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";


const route: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: PostListComponent},
]

@NgModule({
  declarations: [HomeComponent, AboutComponent, PostListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
