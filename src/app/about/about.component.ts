import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  openLink(link: string) {
    window.open(link, '_blank');
  }


  ngOnInit(): void {
  }

}
