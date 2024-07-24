import { Component, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'use-page',
  standalone: true,
  imports: [Devicon, Logo],
  template: ``,
})
export class UsePage {
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `Uses - ${profileData.name}`,
      'Dive into my portfolio, a passionate person',
      [
        'milan khanal dang',
        'milan khanal',
        'khanal milan',
        'milankhanal',
        'software engineer',
        'nepal',
        'bio',
        'developer',
        'portfolio',
        'development',
        'java',
        'backend',
        'machine learning',
      ]
    );
  }
  public github = github;
}
