import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: string = '';
  article: string = '';
  indexList: index[] = [];

  constructor(
    private service: AppService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  hrefTo(id: string) {
    const returnEle: HTMLElement | null = document.querySelector('#' + id);
    if (returnEle) {
      returnEle.scrollIntoView(true);
    }
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.indexList = [
      {
        name: 'sub-title1',
        anchor: 'sub-title1'
      }
    ]
    this.service.getPost(this.id).subscribe({
      next: (next) => {
        this.article = next;
        console.log(this.article);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

}

interface index {
  name: string,
  anchor: string
}
