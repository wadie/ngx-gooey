import { Component } from '@angular/core';
import { Gooey } from 'ngx-gooey';

@Component({
  selector: 'rotating-component',
  standalone: true,
  imports: [Gooey],
  template: `<ngx-gooey [intensity]="'strong'"
    ><svg role="img" aria-label="Example of a gooey effect" class="w-64 h-64">
      <g [style.animation]="'rotate 5s linear infinite'">
        <circle cx="50%" cy="30%" r="24" fill="blueviolet"></circle>
        <circle cx="70%" cy="50%" r="24" fill="darkorchid"></circle>
        <circle cx="50%" cy="70%" r="24" fill="darkmagenta"></circle>
        <circle cx="30%" cy="50%" r="24" fill="rebeccapurple"></circle>
        <circle
          cx="50%"
          cy="30%"
          r="24"
          fill="hotpink"
          [style.animation]="'rotate 2.5s linear infinite'"
        ></circle>
        <circle
          cx="50%"
          cy="70%"
          r="24"
          fill="hotpink"
          [style.animation]="'rotate 2.5s linear infinite'"
        ></circle>
      </g>
    </svg>
  </ngx-gooey>`,
})
export class RotatingComponent {}
