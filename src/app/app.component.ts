import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'designsStudio';
  arrow: any;
  cards = [
    {
      title: 'Mobile',
      description: 'internet'
    },
    {
      title: 'Home',
      description: 'internet'
    },
    {
      title: 'Get a Device',
      description: 'START HERE >',
    },
    {
      title: 'Add a',
      description: 'phone-line'
    },
    {
      title: 'Upgrade',
      description: ''
    }
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

  ngAfterViewInit() {
    this.arrow = document.getElementsByClassName('controls-top')[0];
    if(this.arrow){
    //this.arrow.draggable = true;
    this.arrow.style.position = 'relative';
    this.arrow.style.top = '17em';
    this.arrow.style.zIndex = '9';
    this.arrow.style.right = '-15em';
    this.arrow.children[0].style.marginRight = '25em';
    this.arrow.children[0].style.background = '#000';
    this.arrow.children[0].style.color = '#fff';
    this.arrow.children[0].style.borderRadius = '15px';
    this.arrow.children[0].style.padding = '0px 10px 10px 10px';
    this.arrow.children[0].firstChild.style.position = 'relative';
    this.arrow.children[0].firstChild.style.top = '5px';
    this.arrow.children[1].style.marginRight = '25em';
    this.arrow.children[1].style.background = '#000';
    this.arrow.children[1].style.color = '#fff';
    this.arrow.children[1].style.borderRadius = '15px';
    this.arrow.children[1].style.padding = '0px 10px 10px 10px';
    this.arrow.children[1].firstChild.style.position = 'relative';
    this.arrow.children[1].firstChild.style.top = '5px';
    }
  }

}
