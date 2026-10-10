export type ProductCategory = 'jawitas' | 'bebidas' | 'combos';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
}
