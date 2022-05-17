import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  currentTag: string = '';
  postList: post[] = [];
  showedPostList: post[][] = [];
  tagList: string[] = [];
  tags: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {
  }

  getAllYear(): string[] {
    let yearObj: { [key: string]: number } = {};
    for (let i of this.postList) {
      const tempYear: string = new Date(i.date).getFullYear().toString();
      if (!yearObj[tempYear]) {
        yearObj[tempYear] = 1;
      }
    }
    return Object.keys(yearObj).reverse();
  }

  // Get all tags from the assets file
  getAllTags(): void {
    this.appService.getAssets('tags').subscribe({
      next: (next) => {
        if (next && next.tagList) {
          this.tagList = next.tagList;
        }
      },
      error: () => {
        window.alert('Get tags from assets fails')
      },
      complete: () => {
        this.checkUrlParam();
      }
    })
  }

  /*
  * Check whether the url contains a special tag
  * Default tagList is an array containing the years in a reverse order, which is from current year to before
  * If there is a special tag, just use the very tag and show all posts which includes this tag.
  * */
  checkUrlParam(): void {
    this.route.queryParams.subscribe({
        next: (next) => {
          if (next && next['tag']) {
            this.currentTag = next['tag'];
            this.tagList = [this.currentTag];
          }
          this.getAllPosts();
        },
      error: () => {
        window.alert('Get current tag from url fails')
      }
      }
    )
  }

  getAllPosts(): void {
    this.appService.getAssets('posts').subscribe({
      next: (next) => {
        if (next && next.postList) {
          this.postList = next.postList;
          if (this.currentTag) {
            this.showedPostList = [this.postList.filter(i => i.tags.includes(this.currentTag)).reverse()];
          } else {
            let yearObj: { [key: string]: number } = {};
            for (let i of this.postList) {
              const tempYear: string = new Date(i.date).getFullYear().toString();
              if (!yearObj[tempYear]) {
                yearObj[tempYear] = 1;
              }
            }
            let tempYearArray = Object.keys(yearObj).reverse();
            for (let i = 0; i < tempYearArray.length; i++) {
              if (this.showedPostList[i] === undefined) {
                this.showedPostList[i] = [];
              }
              for (let j of this.postList) {
                if (j.date.slice(0, 4) === tempYearArray[i]) {
                  this.showedPostList[i].unshift(j);
                }
              }
            }
            this.tagList = this.getAllYear();
          }
          for (let i = 0; i < this.showedPostList.length; i++) {
            this.showedPostList[i].sort((a, b) => b.id - a.id);
          }
        }
      },
      error: () => {
        window.alert('Get posts from assets fails')
      }
    })
  }

  ngOnInit(): void {
    this.getAllTags();
  }

}

// The data structure of post
export interface post {
  id: number,
  title: string,
  tags: string[],
  date: string
}
