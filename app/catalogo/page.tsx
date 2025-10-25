'use client';

import { useState, useMemo } from 'react';
import { products as allProducts, Product } from '@/lib/products';
import Card from '@/components/Card'; // Ajustá si tu ruta es distinta

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const categories = Array.from(new Set(allProducts.map(p => p.category).filter(Boolean)));
  const brands = Array.from(new Set(allProducts.map(p => p.brand).filter(Boolean)));

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product: Product) => {
      const matchSearch =
        searchTerm.trim() === '' ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.labels?.some(label =>
          label.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchBrand = selectedBrand ? product.brand === selectedBrand : true;

      return matchSearch && matchCategory && matchBrand;
    });
  }, [searchTerm, selectedCategory, selectedBrand]);

  return (
    <div className=" z-40">
      {/* Filtros */}
      <div className="sticky z-40 top-16 bg-white border-b h-16 w-full flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-auto"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-auto"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-auto"
        >
          <option value="">Todas las marcas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>



      <div className="card_grid mt-6 sm:mt-8 md:mt-10 lg:mt-[120px]">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            text={product.description}
            precio={product.precio}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-4">No se encontraron productos.</p>
      )}
    </div>
  );
}
