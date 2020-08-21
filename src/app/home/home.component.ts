import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //lottie
  weboptions: AnimationOptions = {
    path: '/assets/lottie/web.json',
  };
  appoptions: AnimationOptions = {
    path: '/assets/lottie/app.json',
  };
  marketoptions: AnimationOptions = {
    path: '/assets/lottie/marketing.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  //owl
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      // 1140: {
      //   items: 5
      // },
      // 1340: {
      //   items: 6
      // }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
