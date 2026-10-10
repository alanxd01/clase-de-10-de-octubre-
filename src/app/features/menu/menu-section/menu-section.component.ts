import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { UiService } from '../../../core/services/ui.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';

@Component({
  selector: 'app-menu-section',
  imports: [SectionTitleComponent, ProductGridComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSectionComponent {
  private readonly productService = inject(ProductService);
  private readonly cart = inject(CartService);
  private readonly ui = inject(UiService);

  readonly products = this.productService.products;
  readonly searchTerm = this.productService.searchTerm;

  addToCart(product: Product): void {
    this.cart.add(product);
    this.ui.showToast(`${product.name} agregado a tu pedido`);
  }
}
