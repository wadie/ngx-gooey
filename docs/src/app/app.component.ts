import { Component } from '@angular/core';

import { preventInitialChildAnimations } from '@ng-doc/ui-kit/animations';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  animations: [preventInitialChildAnimations],
})
export class AppComponent {
  getXPosition(size: number): string {
    return `calc(50% - ${size / 2}%)`;
  }

  getYPosition(size: number): string {
    return `calc(50% - ${size / 2}%)`;
  }

  getRadius(size: number): string {
    return `${size * 0.45}%`;
  }
}

/*
   <ngx-gooey [intensity]="'strong'">
    <svg
        role="img"
        aria-label="Example of a gooey effect"
        class="w-80 h-80 mx-auto"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="0" stop-color="darkviolet"></stop>
            <stop offset="1" stop-color="darkturquoise"></stop>
          </linearGradient>
        </defs>
        <g>
          <rect
            [attr.x]="getXPosition(17.5)"
            [attr.y]="getYPosition(17.5)"
            [attr.rx]="getRadius(17.5)"
            width="17.5%"
            height="17.5%"
            [attr.fill]="'url(#gradient)'"
            [style.animation]="'hero_one 4s ease-in-out -5s infinite alternate'"
          ></rect>
          <rect
            [attr.x]="getXPosition(20)"
            [attr.y]="getYPosition(20)"
            [attr.rx]="getRadius(20)"
            width="20%"
            height="20%"
            [attr.fill]="'url(#gradient)'"
            [style.animation]="'hero_three 12s ease-in-out -5s infinite alternate'"
          ></rect>
          <rect
            [attr.x]="getXPosition(25)"
            [attr.y]="getYPosition(25)"
            [attr.rx]="getRadius(25)"
            width="25%"
            height="25%"
            [attr.fill]="'url(#gradient)'"
            [style.animation]="'hero_two 8s ease-in-out -5s infinite alternate'"
          ></rect>
          <rect
            [attr.x]="getXPosition(30)"
            [attr.y]="getYPosition(30)"
            [attr.rx]="getRadius(30)"
            width="30%"
            height="30%"
            [attr.fill]="'url(#gradient)'"
            [style.animation]="'hero_four 16s ease-in-out -5s infinite alternate'"
          ></rect>
        </g>
      </svg>
  </ngx-gooey>
  */
