// app/section-two/section/section.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-two',
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

       <router-footer></router-footer>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent {
  title = 'Section 2';
  TOC1: string = 'Welcome to Section Two';
  TOC2: string = 'Directional Questions';
  TOC3: string = 'Interlibrary Loan (ILL)';
  TOC4: string = 'Study Rooms';
  TOC5: string = 'Shelving Procedures';

  constructor(private router: Router) {}

  navigateToPage(index: number): void {
    let route: string;

    // Determine the route based on the index of the TOC item clicked
    switch (index) {
      case 1:
        route = '/welcome_two';
        break;
      case 2:
        route = '/directional-qs';
        break;
      case 3:
        route = '/ill';
        break;
      case 4:
        route = '/study-rooms';
        break;
      case 5:
        route = '/shelving';
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

