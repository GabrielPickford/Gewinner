'use client';

import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState, useRef } from 'react';

interface ProductCarouselProps {
  images: string[];
  title: string;
}

export default function ProductCarousel({ images, title }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const startXRef = useRef<number | null>(null);

  const changeImage = (newIndex: number, dir: 'left' | 'right') => {
    setDirection(dir);
    setNextIndex(newIndex);

    // Esperamos el tiempo de la animación antes de actualizar currentIndex
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setDirection(null);
    }, 700); // coincide con la duración de animación CSS
  };

  const prevImage = () =>
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1, 'left');

  const nextImage = () =>
    changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1, 'right');

  const selectImage = (index: number) =>
    changeImage(index, index > currentIndex ? 'right' : 'left');

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? nextImage() : prevImage());
    startXRef.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startXRef.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (startXRef.current === null) return;
    const diff = startXRef.current - e.clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? nextImage() : prevImage());
    startXRef.current = null;
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative aspect-square w-[320px] sm:w-[400px] md:w-[450px] flex items-center justify-center select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="relative w-full h-full border border-gray-300 overflow-hidden">
          {/* Imagen actual */}
          <Image
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            width={3000}
            height={3000}
            className={`absolute top-0 left-0 object-contain w-full h-full ${
              direction
                ? direction === 'right'
                  ? 'animate-slide-out-left'
                  : 'animate-slide-out-right'
                : ''
            }`}
          />

          {/* Imagen siguiente */}
          {nextIndex !== null && (
            <Image
              key={nextIndex}
              src={images[nextIndex]}
              alt={title}
              width={3000}
              height={3000}
              className={`absolute top-0 left-0 object-contain w-full h-full ${
                direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
            />
          )}
        </div>

        {/* Botones */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-transparent w-10 sm:w-12 h-full flex justify-center items-center"
            >
              <IoIosArrowBack className="w-8 h-8 sm:w-10 sm:h-10 text-black hover:text-gray-800 hover:scale-110 transition-transform duration-200" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent w-10 sm:w-12 h-full flex justify-center items-center"
            >
              <IoIosArrowForward className="w-8 h-8 sm:w-10 sm:h-10 text-black hover:text-gray-800 hover:scale-110 transition-transform duration-200" />
            </button>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => selectImage(idx)}
              className={`sm:w-20 w-14 sm:h-20 h-14 border ${
                currentIndex === idx ? 'border-gray-800' : 'border-gray-300'
              } cursor-pointer overflow-hidden rounded-md`}
            >
              <Image
                src={img}
                alt={`Preview ${idx + 1}`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
