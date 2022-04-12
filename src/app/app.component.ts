import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  logo = '云峰的博客';
  home = '主页';
  list = '文章';
  about = '关于';
}
