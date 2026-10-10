import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';
import { UiService } from '../../core/services/ui.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';

interface NavLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, SearchInputComponent, ButtonComponent, IconButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly ui = inject(UiService);
  private readonly cart = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly products = inject(ProductService);

  readonly cartCount = this.cart.count;
  readonly searchTerm = this.products.searchTerm;
  readonly isLoggedIn = this.auth.isLoggedIn;
  readonly firstName = this.auth.firstName;

  readonly links: NavLink[] = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Menú', target: 'menu' },
    { label: 'Nosotros', target: 'nosotros' },
  ];

  goTo(target: string, event: Event): void {
    event.preventDefault();
    this.ui.scrollToSection(target);
  }

  updateSearch(term: string): void {
    this.products.setSearchTerm(term);
  }

  submitSearch(): void {
    this.ui.scrollToSection('menu');
  }

  handleAccount(): void {
    if (this.isLoggedIn()) {
      this.auth.logout();
      this.ui.showToast('Cerraste sesión correctamente');
      return;
    }

    this.ui.openLogin();
  }

  openCart(): void {
    this.ui.openCart();
  }
}
