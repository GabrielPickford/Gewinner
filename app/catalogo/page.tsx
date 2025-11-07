'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { products as allProducts, Product } from '@/lib/products';
import Card from '@/components/Card';

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowFilterMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories: string[] = Array.from(
    new Set(allProducts.map(p => p.category).filter((c): c is string => !!c))
  );
  const brands: string[] = Array.from(
    new Set(allProducts.map(p => p.brand).filter((b): b is string => !!b))
  );

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

  // Checkbox handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand === selectedBrand ? '' : brand);
  };

  return (
    <div className="relative z-40">
      {/* Barra sticky */}
      <div className="sticky top-16 z-40 h-16 bg-white border-b border-gray-400 flex items-center px-4 sm:px-8 md:px-16">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 sm:px-8 text-base sm:text-lg h-full flex-1 text-black placeholder:text-black focus:outline-none focus:ring-0"
        />

        <div className="border-r border-gray-400 h-10 mx-2 sm:mx-4" />

        {/* Contenedor del filtro flotante */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className={`px-3 py-2 w-28 sm:w-40 md:w-60 h-full transition duration-300 border-t ${showFilterMenu ? '' : 'border-b border-gray-300 bg-white'
              }`}
          >
            <span className="float-left">Filtros</span>
            <span className="float-right">{showFilterMenu ? '▲' : '▼'}</span>
          </button>

          {/* Menú flotante */}
          <div
            className={`absolute right-0 w-40 sm:w-60 bg-white border-b overflow-hidden transition-all duration-300 ${showFilterMenu ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            style={{
              maxWidth: '90vw',
            }}
          >
            <div className="flex flex-col px-2 py-2 gap-2">
              {/* Categorías */}
              <h4 className="text-sm font-semibold mt-1">Categorías</h4>
              <div className="flex flex-col gap-1">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex justify-between items-center text-sm px-2 py-1 rounded cursor-pointer hover:bg-gray-100"
                  >
                    <span className="text-left truncate">{category}</span>
                    <input
                      type="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="appearance-none h-4 w-4 border border-gray-400 rounded-sm checked:bg-primary checked:border-black transition-colors flex-shrink-0"
                    />
                  </label>
                ))}
              </div>

              {/* Marcas */}
              <h4 className="text-sm font-semibold mt-2">Marcas</h4>
              <div className="flex flex-col gap-1">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex justify-between items-center text-sm px-2 py-1 rounded cursor-pointer hover:bg-gray-100"
                  >
                    <span className="text-left truncate">{brand}</span>
                    <input
                      type="checkbox"
                      checked={selectedBrand === brand}
                      onChange={() => handleBrandChange(brand)}
                      className="appearance-none h-4 w-4 border border-gray-400 rounded-sm checked:bg-primary checked:border-black transition-colors flex-shrink-0"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='flex w-full py-4 px-20' >
        <h2 className="sm:text-[36px] text-[32px] font-bold text-black border-b-4 border-primary-100 pt-4">
          {selectedCategory && selectedBrand
            ? `${selectedCategory} - ${selectedBrand}`
            : selectedCategory || selectedBrand || 'Catálogo'}
        </h2>
      </section>

      {/* Productos */}
      <div className="card_grid mt-6">
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
