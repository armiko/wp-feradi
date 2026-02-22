'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek Sticky Navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-md bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Feradi WPI Logo" 
                // LOGIKA CERDAS: brightness-0 invert akan mengubah logo hitam menjadi putih bersih saat belum di-scroll
                className={`h-8 lg:h-11 w-auto object-contain transition-all duration-300 ${
                  !isScrolled ? 'brightness-0 invert' : ''
                }`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {/* Teks menu diubah jadi putih/terang saat belum di-scroll, dan abu-abu gelap saat di-scroll */}
            <Link href="/#tentang" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-500' : 'text-gray-200 hover:text-white'}`}>Tentang Kami</Link>
            <Link href="/#spesialisasi" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-500' : 'text-gray-200 hover:text-white'}`}>Spesialisasi</Link>
            <Link href="/#layanan" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-500' : 'text-gray-200 hover:text-white'}`}>Layanan</Link>
            <Link href="/#pendekatan" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-500' : 'text-gray-200 hover:text-white'}`}>Pendekatan</Link>
            <Link href="/#kontak" className="bg-primary-500 hover:bg-primary-600 text-white px-7 py-3 rounded-2xl text-sm font-bold transition shadow-lg shadow-primary-500/30 flex items-center gap-2">
              <i className="fa-regular fa-calendar-check text-lg"></i> Jadwalkan Konsultasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              // Warna ikon menu (hamburger) juga disesuaikan
              className={`focus:outline-none transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary-500' : 'text-gray-200 hover:text-white'
              }`}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <Link href="/#tentang" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-navy-900 hover:text-primary-600 hover:bg-gray-50 rounded-xl">Tentang Kami</Link>
            <Link href="/#spesialisasi" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-navy-900 hover:text-primary-600 hover:bg-gray-50 rounded-xl">Spesialisasi</Link>
            <Link href="/#layanan" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-navy-900 hover:text-primary-600 hover:bg-gray-50 rounded-xl">Layanan</Link>
            <Link href="/#pendekatan" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-semibold text-navy-900 hover:text-primary-600 hover:bg-gray-50 rounded-xl">Pendekatan</Link>
            <Link href="/#kontak" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 block text-center bg-primary-500 text-white px-4 py-4 rounded-xl font-bold">Konsultasi Sekarang</Link>
          </div>
        </div>
      )}
    </nav>
  );
}