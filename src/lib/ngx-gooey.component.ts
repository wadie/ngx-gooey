import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngx-gooey',
    imports: [CommonModule],
    template: `
    <svg data-testid="svg" style="pointer-events: none; position: absolute;">
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          data-testid="filter"
          [attr.id]="id"
        >
          <feGaussianBlur
            data-testid="blur"
            [attr.stdDeviation]="blur"
          ></feGaussianBlur>
          <feColorMatrix [attr.values]="colorMatrixValues"></feColorMatrix>
          <feComposite
            *ngIf="composite"
            data-testid="composite"
            in="SourceGraphic"
          ></feComposite>
        </filter>
      </defs>
    </svg>
    <div [ngClass]="className" data-testid="element" [ngStyle]="getStyle()">
      <ng-content></ng-content>
    </div>
  `
})
export class Gooey {
  @Input() children: any;
  @Input() className?: string;
  @Input() composite?: boolean = false;
  @Input() intensity: 'weak' | 'medium' | 'strong' = 'medium';
  @Input() id: string = 'gooey-angular';
  @Input() style?: { [key: string]: string };

  get blur(): number {
    return this.intensity === 'weak'
      ? 8
      : this.intensity === 'strong'
      ? 16
      : 12;
  }

  get alpha(): number {
    return this.blur * 6;
  }

  get shift(): number {
    return this.alpha / -2;
  }

  get r(): string {
    return '1 0 0 0 0';
  }

  get g(): string {
    return '0 1 0 0 0';
  }

  get b(): string {
    return '0 0 1 0 0';
  }

  get a(): string {
    return `0 0 0 ${this.alpha} ${this.shift}`;
  }

  get colorMatrixValues(): string {
    return `${this.r} ${this.g} ${this.b} ${this.a}`;
  }

  getStyle(): { [key: string]: string } {
    return {
      ...(this.style || {}),
      filter: 'url(#' + this.id + ')',
    };
  }
}
