import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService
  ) {
  }

  lists: post[] = []

  getAllPosts(): void {
    this.appService.getAssets('posts').subscribe({
      next: (next) => {
        if (next && next.postList) {
          this.lists = next.postList;
        }
      },
      error: () => {
        window.alert('Get posts from assets fails');
      }
    })
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

}

export interface post {
  id: number,
  title: string,
  description: string,
  totalNum: number,
  tags: string[],
  date: string
}
