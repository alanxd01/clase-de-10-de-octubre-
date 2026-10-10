import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

export type IconButtonVariant = 'filled' | 'light' | 'plain';

@Component({
  selector: 'app-icon-button',
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  readonly icon = input.required<IconName>();
  readonly label = input.required<string>();
  readonly variant = input<IconButtonVariant>('filled');
  readonly size = input(46);
  readonly badge = input(0);
}
