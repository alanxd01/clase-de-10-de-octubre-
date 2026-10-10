import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'cart'
  | 'search'
  | 'user'
  | 'close'
  | 'chevron-right'
  | 'asterisk'
  | 'plus'
  | 'minus'
  | 'trash'
  | 'check'
  | 'heart'
  | 'leaf'
  | 'coffee';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly strokeWidth = input(2);
}
