import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-three',
  template: `
    <h1>{{ title }}</h1>
    <div>
      <app-sidebar
        [toc1]="TOC1"
        [toc2]="TOC2"
        [toc3]="TOC3"
        [toc4]="TOC4"
        [toc5]="TOC5"
        (tocClicked)="navigateToPage($event)"
      ></app-sidebar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./section-three.component.css']
})
export class SectionThreeComponent {
  title = 'Section 3';
  TOC1: string = 'Welcome to Section 3'
  TOC2: string = 'Mason Money';
  TOC3: string = 'Printer';
  TOC4: string = 'Phone Etiquette';
  TOC5: string = 'Library Accounts';

  constructor(private router: Router) {}


  navigateToPage(index: number): void {
    let route: string;

    // Determine the route based on the index of the TOC item clicked
    switch (index) {
      case 1:
        route = '/welcome_three';
        break;
      case 2:
        route = '/mason-money';
        break;
      case 3:
        route = '/printer';
        break;
      case 4:
        route = '/phone';
        break;
      case 5:
        route = '/accounts';
        break;
      default:
        // Handle other cases or set a default route
        route = '/default';
        break;
    }

    // Navigate to the determined route
    this.router.navigate([route]);
  }
}

