import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  template: `
   <h1> {{ title }} </h1>
    <div>
      <app-sidebar
        [toc1]="TOC1"
        [toc2]="TOC2"
        [toc3]="TOC3"
        [toc4]="TOC4"
        [toc5]="TOC5"
        [toc6]="TOC6"
        (tocClicked)="navigateToPage($event)"
      ></app-sidebar>
      <div class="content">
      </div>
      
      <router-footer></router-footer>
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  title = 'Section 1';
  TOC1: string = 'First Day!';
  TOC2: string = 'Around The Library';
  TOC3: string = 'Logging In';
  TOC4: string = 'Policies';
  TOC5: string = 'ALMA';
  TOC6: string = 'Closing';

  constructor(private router: Router) {}

  navigateToPage(index: number): void {
    let route: string;

    // Determine the route based on the index of the TOC item clicked
    switch (index) {
      case 1:
        route = '/welcome_one';
        break;
      case 2:
        route = '/tour';
        break;
      case 3:
        route = '/login';
        break;
      case 4:
        route = '/policies';
        break;
      case 5:
        route = '/alma';
        break;
      case 6:
        route = '/close';
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
