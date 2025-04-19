import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ImgList } from '../../../interfaces/img-list';

@Component({
  selector: 'app-home-slider',
  imports: [CarouselModule],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
})
export class HomeSliderComponent {
  productList: ImgList[] = [
    {
      id: 1,
      image: '/images/img-1.png',
    },
    {
      id: 2,
      image: '/images/img-2.png',
    },
    {
      id: 3,
      image: '/images/img-3.png',
    },
    {
      id: 4,
      image: '/images/img-4.png',
    },
    {
      id: 5,
      image: '/images/img-5.png',
    },
    {
      id: 6,
      image: '/images/img-6.png',
    },
    {
      id: 7,
      image: '/images/img-7.png',
    },
    {
      id: 8,
      image: '/images/img-8.png',
    },
    {
      id: 9,
      image: '/images/img-9.png',
    },
    {
      id: 10,
      image: '/images/img-10.png',
    },
    {
      id: 11,
      image: '/images/img-11.png',
    },
    {
      id: 12,
      image: '/images/img-12.png',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    autoplay: true,
    autoplayTimeout: 1000,
    autoplaySpeed: 500,
    smartSpeed: 800, // Transition speed
    animateOut: 'fadeOut', // Smooth transition effect
    animateIn: 'fadeIn', // Smooth transition effect on entry
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1100: {
        items: 6,
      },
    },
    nav: false,
  };
}
