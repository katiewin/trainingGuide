import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-four',
  template: `
    <h1>{{ title }}</h1>
    <div>
      <app-sidebar
        [toc1]="TOC1"
        [toc2]="TOC2"
        [toc3]="TOC3"
        [toc4]="TOC4"
        (tocClicked)="navigateToPage($event)"
      ></app-sidebar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      
    </div>
  `,
  styleUrls: ['./section-four.component.css']
})
export class SectionFourComponent {
  title = 'Section 4';
  TOC1: string = 'Welcome to Section 4'
  TOC2: string = 'Customer Service';
  TOC3: string = 'Reference Training';
  TOC4: string = 'Working in the Stacks';

  constructor(private router: Router) {}


  navigateToPage(index: number): void {
    let route: string;

    // Determine the route based on the index of the TOC item clicked
    switch (index) {
      case 1:
        route = '/section-four';
        break;
      case 2:
        route = '/customer-service';
        break;
      case 3:
        route = '/reference';
        break;
      case 4:
        route = '/stacks';
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
