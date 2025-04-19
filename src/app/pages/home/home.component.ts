import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { HomeSliderComponent } from '../../shared/components/ui/home-slider/home-slider.component';
import { ReviewSliderComponent } from '../../shared/components/ui/review-slider/review-slider.component';
import { ContactComponent } from '../contact/contact.component';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HomeSliderComponent, ReviewSliderComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  private readonly id = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.id)) {
      AOS.init({
        duration: 800, // animation duration
        easing: 'ease-in-out',
        once: false, // whether animation should happen only once
        mirror: true,
      });
    }
  }
}
