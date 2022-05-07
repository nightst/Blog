import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {

  id: string = '';
  article: string = '';
  indexList: index[] = [];

  constructor() {
  }

  hrefTo(id: string) {
    const returnEle: HTMLElement | null = document.querySelector('#' + id);
    if (returnEle) {
      returnEle.scrollIntoView(true);
    }
  }

  ngOnInit(): void {
    this.indexList = [
      {
        name: 'sub-title1',
        anchor: 'sub-title1'
      }
    ]
  }

}

interface index {
  name: string,
  anchor: string
}

