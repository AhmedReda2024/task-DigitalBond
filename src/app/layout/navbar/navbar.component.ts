import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  scrolled: boolean = false;
  iconpath: string =
    this.scrolled == false ? '/images/logo.webp' : '/images/logo_black.webp';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
