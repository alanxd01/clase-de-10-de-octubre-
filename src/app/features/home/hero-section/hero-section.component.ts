import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UiService } from '../../../core/services/ui.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly ui = inject(UiService);

  goToMenu(): void {
    this.ui.scrollToSection('menu');
  }
}
