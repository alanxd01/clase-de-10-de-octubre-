import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

export type ButtonVariant = 'solid' | 'gradient' | 'outline' | 'chip';
export type ButtonShape = 'pill' | 'rounded';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-block]': 'block()',
  },
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('solid');
  readonly shape = input<ButtonShape>('rounded');
  readonly size = input<ButtonSize>('md');
  readonly type = input<'button' | 'submit'>('button');
  readonly block = input(false);
  readonly disabled = input(false);
  readonly leadingIcon = input<IconName | ''>('');
  readonly trailingIcon = input<IconName | ''>('');
}
