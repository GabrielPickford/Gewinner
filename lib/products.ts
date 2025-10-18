export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: string;
  category?: string; // Nueva propiedad
  brand?: string;    // Nueva propiedad
  labels?: string[]; // Etiquetas (como "oferta", "nuevo", etc.)
}

export const products: Product[] = [
  {
    id: '56419',
    title: 'Motosierra a gasolina',
    description: 'Potente y versátil para trabajos forestales.',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Herramientas eléctricas',
    brand: 'Vulcan',
    labels: ['gasolina', 'bosque']
  },
  {
    id: '56420',
    title: 'Desmalezadora 2T',
    description: 'Ideal para cortar maleza y pasto denso.',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Herramientas eléctricas',
    brand: 'Vulcan',
    labels: ['2 tiempos', 'pasto']
  },
  {
    id: '56421',
    title: 'Cortacésped eléctrico',
    description: 'Ecológico y silencioso, perfecto para jardines pequeños.',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Jardinería',
    brand: 'GreenTech',
    labels: ['eléctrico', 'jardín']
  },
  {
    id: '56423',
    title: 'Cortacésped eléctrico',
    description: 'Ecológico y silencioso, perfecto para jardines pequeños.',
    image: '/assets/vulcanMotosierra.jpg',
    details: 'cce',
    category: 'Jardinería',
    brand: 'GreenTech',
    labels: ['eléctrico', 'jardín']
  },
  // ...
];
