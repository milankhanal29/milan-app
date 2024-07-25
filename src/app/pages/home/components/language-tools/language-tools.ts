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
          <p class="label dark:text-white">Java</p>
        </div>
        <div class="tool-item">
          <div class="icon python"></div>
          <p class="label dark:text-white">Python</p>
        </div>
        <div class="tool-item">
          <div class="icon javascript"></div>
          <p class="label dark:text-white" >JavaScript</p>
        </div>
        <div class="tool-item">
          <div class="icon typescript"></div>
          <p class="label dark:text-white">TypeScript</p>
        </div>
        <div class="tool-item">
          <div class="icon spring"></div>
          <p class="label dark:text-white">Spring</p>
        </div>
        <div class="tool-item">
          <div class="icon spring-boot"></div>
          <p class="label dark:text-white">Spring Boot</p>
        </div>
        <div class="tool-item">
          <div class="icon laravel"></div>
          <p class="label dark:text-white">Laravel</p>
        </div>
        <div class="tool-item">
          <div class="icon lampp"></div>
          <p class="label dark:text-white">LAMPP</p>
        </div>
        <div class="tool-item">
          <div class="icon xampp"></div>
          <p class="label dark:text-white">XAMPP</p>
        </div>
        <div class="tool-item">
          <div class="icon mysql"></div>
          <p class="label dark:text-white">MySQL</p>
        </div>
        <div class="tool-item">
          <div class="icon burpsuite"></div>
          <p class="label dark:text-white">BurpSuite</p>
        </div>
        <div class="tool-item">
          <div class="icon jupyter"></div>
          <p class="label dark:text-white">Jupyter Notebook</p>
        </div>
        <div class="tool-item">
          <div class="icon flask"></div>
          <p class="label dark:text-white">Flask</p>
        </div>
        <div class="tool-item">
          <div class="icon linux"></div>
          <p class="label dark:text-white">Linux</p>
        </div>
        <div class="tool-item">
          <div class="icon mac"></div>
          <p class="label dark:text-white">Mac</p>
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
