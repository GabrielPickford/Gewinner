"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white border-b border-gray-400">
      <nav className="flex justify-between items-center w-full h-full px-5 md:px-10">
        {/* Logo desktop */}
        <div className="hidden md:flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>
        </div>

        {/* Menú + WhatsApp desktop */}
        <div className="hidden md:flex items-center gap-12 ml-auto text-black">
          <Link href="/catalogo">
            <span className="hover:text-tertiary">Hyundai</span>
          </Link>
          <Link href="/catalogo">
            <span className="hover:text-secondary">Vulcan</span>
          </Link>
          <Link href="/catalogo">
            <span className="text-20-medium hover:text-black-100">Catálogo</span>
          </Link>

          <div>
            <WhatsAppButton
              buttonText={
                <>
                  Información<SiWhatsapp className="h-5 w-5 ml-2" />
                </>
              }
              message="Hola, quisiera más información sobre sus servicios."
            />
          </div>
        </div>


        {/* Área móvil: Menú - Logo - WhatsApp */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Botón hamburguesa */}
          <div
            className="flex flex-col items-center justify-center w-9 h-10 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${menuOpen ? "rotate-[-45deg]" : ""
                }`}
            ></div>
            <div
              className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${menuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></div>
            <div
              className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${menuOpen ? "rotate-[45deg]" : ""
                }`}
            ></div>
          </div>

          {/* Logo móvil */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>

          {/* Botón WhatsApp móvil */}
          <WhatsAppButton
            buttonText={<SiWhatsapp className="h-5 w-5" />}
            message="Hola, quisiera más información sobre sus servicios."
          />
        </div>
      </nav>

      {/* Menú desplegable móvil */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-t border-gray-300 flex flex-col items-center text-black transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
          }`}
      >
        <Link href="/catalogo" onClick={() => setMenuOpen(false)}>
          <span className="block py-2 hover:text-tertiary">Hyundai</span>
        </Link>
        <Link href="/catalogo" onClick={() => setMenuOpen(false)}>
          <span className="block py-2 hover:text-secondary">Vulcan</span>
        </Link>
        <Link href="/catalogo" onClick={() => setMenuOpen(false)}>
          <span className="block py-2 hover:text-black-100">Catálogo</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
