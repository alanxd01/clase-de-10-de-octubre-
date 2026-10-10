import { ChangeDetectionStrategy, Component, HostListener, effect, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { UiService } from '../../core/services/ui.service';
import { CartItemComponent } from '../../features/cart/cart-item/cart-item.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BolivianosPipe } from '../../shared/pipes/bolivianos.pipe';

@Component({
  selector: 'app-cart-drawer',
  imports: [
    CartItemComponent,
    ButtonComponent,
    IconButtonComponent,
    IconComponent,
    BolivianosPipe,
  ],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDrawerComponent {
  private readonly ui = inject(UiService);
  private readonly cart = inject(CartService);
  private readonly auth = inject(AuthService);

  readonly isOpen = this.ui.cartOpen;
  readonly items = this.cart.items;
  readonly count = this.cart.count;
  readonly total = this.cart.total;
  readonly isEmpty = this.cart.isEmpty;

  constructor() {
    effect(() => {
      document.body.classList.toggle('is-locked', this.isOpen());
    });
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }

  close(): void {
    this.ui.closeCart();
  }

  checkout(): void {
    if (this.isEmpty()) {
      return;
    }

    if (!this.auth.isLoggedIn()) {
      this.ui.closeCart();
      this.ui.openLogin();
      this.ui.showToast('Inicia sesión para completar tu pedido');
      return;
    }

    const name = this.auth.firstName();
    this.cart.clear();
    this.ui.closeCart();
    this.ui.showToast(`¡Pedido confirmado, ${name}! Gracias por tu compra`);
  }
}
