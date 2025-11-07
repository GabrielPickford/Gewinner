// app/catalogo/[id]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import type { Product } from '@/lib/products';
import Masvendido from "@/components/Masvendido";
import ProductCarousel from '@/components/ProductCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) notFound();

  const images = [product.image, product.imageB, product.imageC, product.imageD, product.imageE].filter(Boolean) as string[];

  return (
    <>
      <main className="px-6 max-w-6xl mx-auto">
        <section className="grid md:grid-cols-2 gap-10 items-center py-12">
          <ProductCarousel images={images} title={product.title} />

          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-primary pb-2">{product.title}</h2>

            {product.precio && product.precio !== '0.00$' && (
              <div>
                <p className="text-2xl font-semibold">
                  <span className="text-gray-800">{product.precio}</span>
                  <span className="text-black"> Bs</span>
                </p>
              </div>
            )}

            <div className="text-sm text-gray-500">
              {product.brand && <span className="mr-4"><strong>Marca:</strong> {product.brand}</span>}
              {product.category && <span><strong>Categoría:</strong> {product.category}</span>}
            </div>

            {product.description && product.description.trim() !== '' ? (
              <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
            ) : (
              <p className="text-gray-400 italic">No hay descripción disponible para este producto.</p>
            )}

            <div className="pt-4">
              <WhatsAppButton product={product} buttonText="Ordenar por WhatsApp"/>
            </div>

            {product.labels && product.labels.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {product.labels.map((label, i) => label && (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{label}</span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mt-16 pb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-primary pb-2">DETALLES TÉCNICOS</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <tbody className="divide-y divide-gray-200">
                {product.details && Object.keys(product.details).length > 0 ? (
                  Object.entries(product.details).map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-4 py-2 font-medium text-gray-700">{key}</td>
                      <td className="px-4 py-2 text-gray-600" style={{ whiteSpace: 'pre-line' }}>{value}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="px-4 py-4 text-center text-gray-400 italic">No hay información técnica disponible.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <section className="w-full">
        <Masvendido />
      </section>
    </>
  );
};

export default ProductPage;
