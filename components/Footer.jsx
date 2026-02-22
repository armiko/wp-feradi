'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-navy-950 pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/logo.png" 
                  alt="Feradi WPI Logo" 
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                Organisasi Advokat dan Paralegal independen yang mendedikasikan diri sepenuhnya pada profesionalitas penegakan supremasi hukum bagi seluruh rakyat Indonesia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wider">Tautan Cepat</h3>
              <ul className="space-y-3">
                <li><Link href="/#tentang" className="text-gray-400 hover:text-primary-400 text-sm transition">Profil Organisasi</Link></li>
                <li><Link href="/#spesialisasi" className="text-gray-400 hover:text-primary-400 text-sm transition">Area Praktik</Link></li>
                <li><Link href="/#layanan" className="text-gray-400 hover:text-primary-400 text-sm transition">Layanan Bantuan Hukum</Link></li>
                <li><Link href="/#testimoni" className="text-gray-400 hover:text-primary-400 text-sm transition">Ulasan Klien</Link></li>
                <li><Link href="/#faq" className="text-gray-400 hover:text-primary-400 text-sm transition">Pertanyaan Umum (FAQ)</Link></li>
              </ul>
            </div>

            {/* Network */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wider">Jaringan Kami</h3>
              <ul className="space-y-3">
                <li><a href="https://www.feradi.or.id" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-400 text-sm transition flex items-center gap-2"><i className="fa-solid fa-globe text-xs"></i> www.feradi.or.id</a></li>
                <li><a href="https://www.kawanjarinews.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-400 text-sm transition flex items-center gap-2"><i className="fa-solid fa-globe text-xs"></i> www.kawanjarinews.com</a></li>
                <li className="pt-5 border-t border-navy-800 mt-4">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-bold">Didukung Penuh Oleh:</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300 font-medium">
                    <span className="bg-navy-800/80 border border-navy-700 px-2.5 py-1 rounded">Subur Jaya Law Firm</span>
                    <span className="bg-navy-800/80 border border-navy-700 px-2.5 py-1 rounded">Kawan Jari</span>
                    <span className="bg-navy-800/80 border border-navy-700 px-2.5 py-1 rounded">PMBI</span>
                    <a href="https://dahono.com" target="_blank" rel="noreferrer" className="bg-navy-800/80 border border-navy-700 px-2.5 py-1 rounded hover:bg-primary-600 hover:text-white transition-colors cursor-pointer">PT Dahono Consulting Agency</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wider">Informasi Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-map-location-dot text-primary-500 mt-1"></i>
                  <span className="text-gray-400 text-sm leading-relaxed">Ruko A7 Apt. Candiland, Jl. Diponegoro 24B, Semarang 50614</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-phone text-primary-500"></i>
                  <span className="text-gray-400 text-sm">0858 6753 1704</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-primary-500"></i>
                  <span className="text-gray-400 text-sm">suburjayalawfirm@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left leading-relaxed">
              &copy; {currentYear} Feradi WPI & Subur Jaya Law Firm. Seluruh Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-gray-500">
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-primary-400 transition-colors focus:outline-none">Ketentuan Layanan</button>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-primary-400 transition-colors focus:outline-none">Kebijakan Privasi</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Ketentuan Layanan */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setIsTermsOpen(false)}></div>
          <div className="relative bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-2xl w-full max-h-[85vh] flex flex-col z-10">
            <div className="bg-slate-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-heading font-bold text-navy-900">Ketentuan Layanan</h3>
              <button onClick={() => setIsTermsOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors focus:outline-none">
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto text-sm text-gray-600 space-y-4 font-light leading-relaxed">
              <p>Selamat datang di <strong>Feradi WPI</strong>. Dengan mengakses dan menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui ketentuan berikut:</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">1. Sifat Layanan Konsultasi</h4>
              <p>Informasi yang diberikan melalui situs web ini atau melalui konsultasi awal bersifat informatif dan tidak serta merta menciptakan hubungan hukum antara Klien dan Advokat (<em>Attorney-Client Privilege</em>) hingga ditandatanganinya Surat Kuasa Resmi antara kedua belah pihak.</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">2. Akurasi Informasi</h4>
              <p>Klien berkewajiban penuh untuk memberikan informasi, kesaksian, dan dokumen yang akurat, jujur, dan lengkap terkait perkara yang dihadapi untuk memastikan penanganan taktis yang tepat sasaran.</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">3. Etika & Kerahasiaan</h4>
              <p>Kami berkomitmen menjunjung tinggi Kode Etik Advokat Indonesia untuk menjaga kerahasiaan setiap data, rahasia klien, informasi, dan dokumen yang Anda sampaikan kepada tim kami.</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">4. Pembatasan Tanggung Jawab</h4>
              <p>Hasil dari proses hukum selalu bergantung pada fakta hukum, alat bukti, dan independensi putusan otoritas/majelis hakim. Kami tidak dapat memberikan jaminan mutlak atas hasil akhir dari sebuah perkara, melainkan komitmen perwakilan dan upaya maksimal berdasarkan keahlian hukum profesional.</p>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-right">
              <button onClick={() => setIsTermsOpen(false)} className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors focus:outline-none">Saya Mengerti</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Kebijakan Privasi */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setIsPrivacyOpen(false)}></div>
          <div className="relative bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-2xl w-full max-h-[85vh] flex flex-col z-10">
            <div className="bg-slate-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-heading font-bold text-navy-900">Kebijakan Privasi</h3>
              <button onClick={() => setIsPrivacyOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors focus:outline-none">
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto text-sm text-gray-600 space-y-4 font-light leading-relaxed">
              <p>Privasi Anda adalah prioritas utama kami. Kebijakan ini menjelaskan bagaimana <strong>Feradi WPI</strong> mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">1. Pengumpulan Data</h4>
              <p>Kami hanya mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat berinteraksi dengan kami melalui formulir konsultasi situs web, email, maupun kontak via aplikasi pesan instan (seperti nama, nomor telepon, dan deksripsi perkara).</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">2. Penggunaan Data</h4>
              <p>Data yang dikumpulkan semata-mata digunakan untuk keperluan evaluasi kasus internal, komunikasi klien secara langsung, dan tindak lanjut pendampingan hukum. Kami sama sekali tidak akan menjual, menyewakan, atau mendistribusikan informasi Anda kepada pihak ketiga mana pun tanpa persetujuan Anda.</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">3. Perlindungan Keamanan</h4>
              <p>Kami menerapkan standar keamanan dan sistem yang ketat untuk memastikan perlindungan informasi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran data.</p>
              <h4 className="font-bold text-navy-900 mt-4 mb-2">4. Hak-hak Pengguna</h4>
              <p>Anda berhak untuk meninjau, meminta pembaruan, melakukan perbaikan, atau penghapusan data pribadi Anda dari sistem internal kami dengan menghubungi layanan kontak resmi kami.</p>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-right">
              <button onClick={() => setIsPrivacyOpen(false)} className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors focus:outline-none">Tutup</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}