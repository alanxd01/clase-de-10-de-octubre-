import { Product } from '../models/product.model';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: 'Jawita Tradicional',
    description: 'La auténtica jawita con abundante queso fundido y masa dulce crujiente.',
    price: 8,
    image: 'assets/images/jawita-tradicional.jpg',
    category: 'jawitas',
  },
  {
    id: 2,
    name: 'Combo Jawita + Café',
    description: 'Una deliciosa jawita tradicional acompañada de nuestro café destilado caliente.',
    price: 15,
    image: 'assets/images/combo-jawita-cafe.jpg',
    category: 'combos',
  },
  {
    id: 3,
    name: 'Jawita de Carne',
    description: 'Rellena de un jugoso ahogado de carne molida, huevo duro y un toque de aceitunas.',
    price: 10,
    image: 'assets/images/jawita-carne.jpg',
    category: 'jawitas',
  },
  {
    id: 4,
    name: 'Jugo de Naranja Natural',
    description: 'Jugo fresco de naranjas de los Yungas recién exprimidas, sin azúcar añadida.',
    price: 10,
    image: 'assets/images/jugo-naranja.jpg',
    category: 'bebidas',
  },
  {
    id: 5,
    name: 'Té de Coca Yungueño',
    description: 'Infusión tradicional de hojas de coca de los Yungas, ideal para acompañar tu jawita.',
    price: 6,
    image: 'assets/images/te-de-coca.jpg',
    category: 'bebidas',
  },
  {
    id: 6,
    name: 'Café',
    description: 'Café orgánico 100% puro, destilado artesanalmente, con aroma intenso a Chulumani.',
    price: 8,
    image: 'assets/images/cafe.jpg',
    category: 'bebidas',
  },
];
