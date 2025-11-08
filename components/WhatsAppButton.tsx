'use client';
import { useState } from 'react';
import type { Product } from '@/lib/products';
import type { ReactNode } from 'react';

interface WhatsAppButtonProps {
  product?: Product;
  buttonText?: ReactNode; // 👈 Antes era string, ahora permite íconos, JSX, etc.
  message?: string;
}

const WhatsAppButton = ({
  product,
  buttonText = 'Ordenar por WhatsApp',
  message,
}: WhatsAppButtonProps) => {
  const phoneNumbers = ['59178009919', '59167972897'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const text =
      message ??
      `Hola, estoy interesado en el producto ${product?.title} (ID: ${product?.id}).`;
    const url = `https://wa.me/${phoneNumbers[currentIndex]}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, '_blank');

    setCurrentIndex((currentIndex + 1) % phoneNumbers.length);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center bg-green hover:bg-green-700 text-white font-medium sm:py-3 py-3 sm:px-6 px-4 rounded-full transition-colors"
    >
      {buttonText}
    </button>
  );
};

export default WhatsAppButton;
