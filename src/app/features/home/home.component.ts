import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuSectionComponent } from '../menu/menu-section/menu-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, MenuSectionComponent, AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
