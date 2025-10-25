export interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  details?: string;
  category?: string;
  brand?: string;
  labels?: string[];
  precio?: string;  // Nueva propiedad precio
}

export const products: Product[] = [
  //0
  {
    id: '',
    title: '',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: '',
    brand: '',
    labels: ['', ''],
    precio: '0.00$',
  },
  //1 Motobomba
  {
    id: 'VMB652S',
    title: 'Motobomba a Gasolina Caudal 2"',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motobombas',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$', // Precio añadido
  },
  //2
  {
    id: 'VMB653S',
    title: 'Motobomba a Gasolina Caudal 3"',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motobombas',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$', // Precio añadido
  },
  //3
  {
    id: 'VMB552H',
    title: 'Motobomba a Gasolina Caudal 2" Alta Presión',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motobombas',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$', // Precio añadido
  },
  //4
  {
    id: 'VB10B',
    title: 'Motobomba a Gasolina 1"',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motobombas',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$', // Precio añadido
  },
  //1 Desb
  {
    id: 'VR520H',
    title: 'Desbrozadora a Gasolina 5.5HP, 52cc',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Desbrozadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //2 Desb
  {
    id: 'VR520HB',
    title: 'Desbrozadora a Gasolina 5.5HP, 52cc Desmontable',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Desbrozadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //3 Desbozadora
  {
    id: 'VR620H',
    title: 'Desbrozadora a Gasolina 3HP, 62cc',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Desbrozadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //4 Desb
  {
    id: 'VMR330',
    title: 'Desbrozadora Multifunción 1.5HP, 33cc',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Desbrozadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //1 Taladro
  {
    id: 'CF500',
    title: 'Taladro',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Taladros',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //1 Fumigadora
  {
    id: 'VAT820P',
    title: 'Fumigadora con Bomba 2T, 5.4HP, 82cc ',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Fumigadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //2 Fumigadora
  {
    id: 'VPB16L8A',
    title: 'Fumigadora Batería 16L',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Fumigadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //3 Fumigadora
  {
    id: 'VPM260',
    title: 'Fumigadora de Varilla 0.9HP, 26cc',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Fumigadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //4 Fumigadora
  {
    id: 'VP20L',
    title: 'Fumigadora de Mochila 20L',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Fumigadoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },  
  //1 Perforador
  {
    id: 'VPS520',
    title: 'Perforador de Tierra 2T, 55cc, 2.5HP, con Broca 20cm',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Perforadores',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //1 Motocultor
  {
    id: 'VMC700S',
    title: 'Motocultor de 7HP',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motocultores',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //1 Podadora
  {
    id: 'VP3300L',
    title: 'Podadora de Altura',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: '',
    brand: '',
    labels: ['', ''],
    precio: '0.00$', 
  },
  //2 Podadora
  {
    id: 'VP2450',
    title: 'Podadora Cortasetos 2T, 25cc',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: '',
    brand: '',
    labels: ['', ''],
    precio: '0.00$', 
  },
  //1 Motosierra
  {
    id: 'VSL620',
    title: 'Motosierra 2T, 62cc, 4HP',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motosierras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //2 Motosierra
  {
    id: 'VSL550',
    title: 'Motosierra 2T, 55cc, 3HP',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Motosierras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
  //1 Sopladora
  {
    id: 'SV8000',
    title: 'Sopladora de Hojas',
    description: '',
    image: '/assets/vulcanMotosierra.jpg',
    category: 'Sopladoras',
    brand: 'Vulcan',
    labels: ['', ''],
    precio: '0.00$',
  },
];
