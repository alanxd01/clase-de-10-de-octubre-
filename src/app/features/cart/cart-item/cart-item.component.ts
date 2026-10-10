import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CartItem } from '../../../core/models/cart-item.model';
import { CartService } from '../../../core/services/cart.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { QuantityStepperComponent } from '../../../shared/components/quantity-stepper/quantity-stepper.component';
import { BolivianosPipe } from '../../../shared/pipes/bolivianos.pipe';

@Component({
  selector: 'app-cart-item',
  imports: [QuantityStepperComponent, IconComponent, BolivianosPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  private readonly cart = inject(CartService);

  readonly item = input.required<CartItem>();

  increase(): void {
    this.cart.increase(this.item().product.id);
  }

  decrease(): void {
    this.cart.decrease(this.item().product.id);
  }

  remove(): void {
    this.cart.remove(this.item().product.id);
  }
}
