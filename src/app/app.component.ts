import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {
    this.test();
    console.log(this.lists);
  }
  logo = '云峰的博客';
  home = '主页';
  list = '文章';
  about = '关于';
  lists: {title: string}[] = []
  test () {
    for (let i = 0; i < 50; i++) {
      let temp = {
        title: `标题${i}`
      }
      this.lists.push(temp);
    }
  }

  ngOnInit(): void {
  }
}
