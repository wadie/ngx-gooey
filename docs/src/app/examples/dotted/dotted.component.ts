import { Component } from '@angular/core';
import { Gooey } from 'ngx-gooey';

@Component({
  selector: 'dotted-demo',
  standalone: true,
  imports: [Gooey],
  template: `<ngx-gooey>
    <svg role="img" aria-label="Example of a gooey effect" class="w-64 h-64">
      <g>
        <circle
          cx="25%"
          cy="50%"
          r="20"
          fill="darkorchid"
          [style.animation]="'sway 0.4s ease-out infinite alternate'"
        />
        <circle
          cx="45%"
          cy="50%"
          r="20"
          fill="blueviolet"
          [style.animation]="'sway 0.4s -0.4s ease-out infinite alternate'"
        />
        <circle
          cx="65%"
          cy="50%"
          r="20"
          fill="rebeccapurple"
          [style.animation]="'sway 0.4s ease-out infinite alternate'"
        />
      </g>
    </svg>
  </ngx-gooey>`,
})
export class DottedComponent {}
