// Agrega esta línea al principio de tu archivo
"use client"; 

import React, { useRef } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";

function Work() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-white mb-8">LA PALA</h1>
      <div className="w-full max-w-4xl bg-black rounded-2xl shadow-lg overflow-hidden">
        <video ref={videoRef} className="w-full h-auto" controls autoPlay>
          <source src="/assets/rickroll.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      <Link href="/" passHref>
        <button
          onClick={handlePause}
          className="absolute top-4 left-4 flex items-center justify-center p-2 bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <HiArrowSmLeft className="h-10 w-10" />
        </button>
      </Link>
    </div>
  );
}

export default Work;

