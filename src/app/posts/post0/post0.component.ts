import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post0',
  templateUrl: './post0.component.html',
  styleUrls: ['./post0.component.css']
})
export class Post0Component implements OnInit {

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

