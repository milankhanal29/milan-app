import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { LanguageToolService } from '@pages/home/components/language-tools/language-tool.service';
import { Devicon } from '@shared/components/devicon/devicon';
@Component({
  selector: 'language-tools',
  template: `
    <section class="mt-10">
      <h1 class="text-2xl dark:text-white">Languages and Tools</h1>
      <div class="flex flex-wrap justify-center gap-6 py-6">
        <div class="tool-item">
          <div class="icon java"></div>
          <p class="label">Java</p>
        </div>
        <div class="tool-item">
          <div class="icon python"></div>
          <p class="label">Python</p>
        </div>
        <div class="tool-item">
          <div class="icon javascript"></div>
          <p class="label">JavaScript</p>
        </div>
        <div class="tool-item">
          <div class="icon typescript"></div>
          <p class="label">TypeScript</p>
        </div>
        <div class="tool-item">
          <div class="icon spring"></div>
          <p class="label">Spring</p>
        </div>
        <div class="tool-item">
          <div class="icon spring-boot"></div>
          <p class="label">Spring Boot</p>
        </div>
        <div class="tool-item">
          <div class="icon laravel"></div>
          <p class="label">Laravel</p>
        </div>
        <div class="tool-item">
          <div class="icon lampp"></div>
          <p class="label">LAMPP</p>
        </div>
        <div class="tool-item">
          <div class="icon xampp"></div>
          <p class="label">XAMPP</p>
        </div>
        <div class="tool-item">
          <div class="icon mysql"></div>
          <p class="label">MySQL</p>
        </div>
        <div class="tool-item">
          <div class="icon burpsuite"></div>
          <p class="label">BurpSuite</p>
        </div>
        <div class="tool-item">
          <div class="icon jupyter"></div>
          <p class="label">Jupyter Notebook</p>
        </div>
        <div class="tool-item">
          <div class="icon flask"></div>
          <p class="label">Flask</p>
        </div>
        <div class="tool-item">
          <div class="icon linux"></div>
          <p class="label">Linux</p>
        </div>
        <div class="tool-item">
          <div class="icon mac"></div>
          <p class="label">Mac</p>
        </div>
      </div>
    </section>

  `,
  imports: [Devicon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LanguageTools {
  lts = inject(LanguageToolService)
}
