import { Injectable, computed, signal } from '@angular/core';
import { PRODUCTS_MOCK } from '../data/products.mock';
import { Product } from '../models/product.model';

const normalize = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly catalog = signal<Product[]>(PRODUCTS_MOCK);

  readonly searchTerm = signal('');

  readonly products = computed(() => {
    const term = normalize(this.searchTerm());
    const all = this.catalog();

    if (!term) {
      return all;
    }

    return all.filter((product) =>
      normalize(`${product.name} ${product.description}`).includes(term),
    );
  });

  setSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }
}
