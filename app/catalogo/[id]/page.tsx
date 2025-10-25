import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params; // ✅ Desestructuramos tras resolver la Promise

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-80 md:h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>

          {product.details && (
            <div className="text-sm text-gray-500">
              <strong>Detalles:</strong> {product.details}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
