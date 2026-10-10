import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent, IconName } from '../../../shared/components/icon/icon.component';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

interface AboutHighlight {
  icon: IconName;
  title: string;
  text: string;
}

@Component({
  selector: 'app-about-section',
  imports: [SectionTitleComponent, IconComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  readonly highlights: AboutHighlight[] = [
    {
      icon: 'leaf',
      title: 'Ingredientes de los Yungas',
      text: 'Naranjas, café y productos frescos que llevan el sabor de la tierra.',
    },
    {
      icon: 'heart',
      title: 'Receta tradicional',
      text: 'La masa dulce y crujiente con queso fundido de toda la vida.',
    },
    {
      icon: 'coffee',
      title: 'Café destilado artesanal',
      text: 'Aroma intenso a Chulumani en cada taza, servido bien caliente.',
    },
  ];
}
