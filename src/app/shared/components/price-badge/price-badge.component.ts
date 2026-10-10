import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BolivianosPipe } from '../../pipes/bolivianos.pipe';

@Component({
  selector: 'app-price-badge',
  imports: [BolivianosPipe],
  templateUrl: './price-badge.component.html',
  styleUrl: './price-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceBadgeComponent {
  readonly price = input.required<number>();
}
