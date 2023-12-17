import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div>
      <p class="first"><a (click)="emitTOCClick(1)">{{ toc1 }}</a></p>
      <p><a (click)="emitTOCClick(2)">{{ toc2 }}</a></p>
      <p><a (click)="emitTOCClick(3)">{{ toc3 }}</a></p>
      <p><a (click)="emitTOCClick(4)">{{ toc4 }}</a></p>
      <p><a (click)="emitTOCClick(5)">{{ toc5 }}</a></p>
      <p><a (click)="emitTOCClick(6)">{{ toc6 }}</a></p>
    </div>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() toc1: string = '';
  @Input() toc2: string = '';
  @Input() toc3: string = '';
  @Input() toc4: string = '';
  @Input() toc5: string = '';
  @Input() toc6: string = '';

  @Output() tocClicked = new EventEmitter<number>();

  emitTOCClick(index: number): void {
    this.tocClicked.emit(index);
  }
}

