import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
    <svg class="hover:text-primary" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="50" font-family="Arial, sans-serif" font-size="35" font-weight="bold" fill="currentColor">MK</text>

    </svg>

  </a>
`
})
export class Logo {}
