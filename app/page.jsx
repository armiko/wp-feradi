import Link from 'next/link';

// Fungsi mengambil data dari WordPress
async function getPosts() {
  try {
    // GANTI URL DI BAWAH DENGAN DOMAIN WORDPRESS ANDA
    const res = await fetch('https://feradi.dahono.com/wp-json/wp/v2/posts?_embed&per_page=3', {
      next: { revalidate: 3600 } // Update data cache setiap 1 jam
    });
    
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Gagal mengambil artikel WP:", error);
    return [];
  }
}

export default async function Home() {
  // Panggil fungsi getPosts
  const posts = await getPosts();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-24 lg:pb-32 flex items-center min-h-[90vh] bg-navy-950 overflow-hidden">
        {/* Abstract CSS Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full filter blur-[100px] opacity-60 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary-400/10 rounded-full filter blur-[120px] opacity-40 translate-y-1/3 pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              <span className="text-primary-200 text-xs font-bold tracking-wider uppercase">Firma Hukum & Rekan Profesional</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Mewujudkan <span className="text-primary-400">Keadilan</span> <br /> Bagi Anda.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Hukum merupakan instrumen esensial untuk menjaga ketertiban, keamanan, dan keadilan. Kami hadir memberikan pendampingan hukum yang presisi, profesional, dan berintegritas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#kontak" className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl text-center font-bold transition-all shadow-lg shadow-primary-500/40 flex items-center justify-center gap-2 text-lg">
                <i className="fa-brands fa-whatsapp text-xl"></i> Konsultasi Hukum Gratis
              </Link>
              <Link href="#layanan" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl text-center font-bold transition-all flex items-center justify-center gap-2 text-lg">
                Pelajari Layanan Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-10 sm:py-12 relative z-20 -mt-12 mx-4 sm:mx-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <div className="text-center px-4 pt-4 sm:pt-0">
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-2">20+</h3>
              <p className="text-xs md:text-sm text-navy-900 font-bold uppercase tracking-wider">Kantor Jaringan</p>
            </div>
            <div className="text-center px-4 pt-8 sm:pt-0">
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-2">8+</h3>
              <p className="text-xs md:text-sm text-navy-900 font-bold uppercase tracking-wider">Tahun Berdiri</p>
            </div>
            <div className="text-center px-4 pt-8 sm:pt-0">
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-2">24/7</h3>
              <p className="text-xs md:text-sm text-navy-900 font-bold uppercase tracking-wider">Kesiapan Tim</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-200 opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Profil Institusi</h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-8 leading-tight">
                Bersinergi Mendukung <br /> <span className="text-primary-500">Pelayanan Hukum Maksimal</span>
              </h2>
              <div className="space-y-5 text-gray-600 font-light leading-relaxed text-justify">
                <p>
                  <strong className="text-navy-900 font-semibold">Subur Jaya Law Firm</strong> didirikan dengan legalitas SK Firma Hukum AHU-0001173. AH.01.18 Tahun 2024. Kami hadir sebagai pilar penegak hukum yang berorientasi pada hasil nyata dan perlindungan hak klien.
                </p>
                <p>
                  Guna memperluas akses edukasi dan bantuan hukum bagi masyarakat luas, sang pendiri turut merintis Organisasi Advokat berbasis advokat dan paralegal bernama <strong className="text-navy-900 font-semibold">Forum Era Adil Warung Paralegal Indonesia (Feradi WPI)</strong> yang disahkan melalui SK Perkumpulan AHU-0003170.AH.01.07 Tahun 2024.
                </p>
                <p>
                  Jaringan kami senantiasa diperkuat oleh aliansi strategis bersama <strong className="text-navy-900 font-semibold">Ikatan Wartawan Jagat Raya Indonesia (Kawan Jari)</strong> dan <strong className="text-navy-900 font-semibold">Perkumpulan Masyarakat Bertato Indonesia (PMBI)</strong> demi menjangkau perlindungan hukum yang inklusif bagi seluruh lapisan masyarakat.
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-100 shadow-sm">
                  <img src="https://mooncare.my.canva.site/suburjayalawfirm/media/39a24fde7e09629236a3ecd43ed270be.jpg" alt="Adv. Donny Andretti" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="text-navy-900 font-bold text-xl font-heading">Adv. Donny Andretti</h4>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1">S.H., S.Kom., M.Kom., C.Md.</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">Pendiri Feradi WPI & Pimpinan Subur Jaya Law Firm</p>
                </div>
              </div>
            </div>
            <div className="relative pl-0 md:pl-8 pb-8">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-4/5 ml-auto">
                <img src="https://mooncare.my.canva.site/suburjayalawfirm/media/91f26dbd71ad7050f1c7eedab8040941.jpg" alt="Adv. Donny Andretti" className="w-full h-full object-cover aspect-[3/4]" />
                <div className="absolute inset-0 bg-navy-900/10"></div>
              </div>
              <div className="absolute top-1/4 md:top-1/3 left-0 z-20 rounded-3xl overflow-hidden shadow-2xl w-3/5 border-[6px] border-white">
                <img src="https://mooncare.my.canva.site/suburjayalawfirm/media/39a24fde7e09629236a3ecd43ed270be.jpg" alt="Profil Advokat" className="w-full h-full object-cover aspect-square" />
                <div className="absolute inset-0 bg-navy-900/10"></div>
              </div>
              <div className="absolute -bottom-4 right-0 md:-right-8 bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[16rem] md:max-w-xs z-30">
                <div className="flex gap-4 items-center">
                  <i className="fa-solid fa-quote-left text-3xl md:text-4xl text-primary-300"></i>
                  <p className="text-xs md:text-sm font-medium text-gray-700 italic">"Keadilan bukanlah sebuah keistimewaan, melainkan hak asasi fundamental setiap warga negara."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section id="spesialisasi" className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-3">Area Praktik</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Spesialisasi Kami</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 font-light text-lg">Solusi hukum komprehensif yang dirancang khusus untuk melindungi kepentingan personal maupun aset korporasi Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-800 rounded-3xl p-10 border border-gray-700 card-hover transition duration-300">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400 mb-8">
                <i className="fa-solid fa-gavel text-3xl"></i>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">Hukum Umum & Khusus</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Meliputi pendampingan untuk Kasus Pidana Umum & Khusus, Perdata Umum, Perkawinan & Perceraian, Hukum Keluarga & Warisan, Sengketa Tanah, Tata Usaha Negara, hingga Hukum Bisnis & Perusahaan.
              </p>
            </div>

            <div className="bg-navy-800 rounded-3xl p-10 border border-gray-700 card-hover transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400 mb-8 relative z-10">
                <i className="fa-solid fa-chart-pie text-3xl"></i>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-white relative z-10">Financial Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10">
                Melakukan analisis tajam terhadap dokumen dan kontrak bisnis dari perspektif hukum untuk meminimalkan potensi sengketa di masa depan serta mengantisipasi celah permasalahan keuangan secara dini.
              </p>
            </div>

            <div className="bg-navy-800 rounded-3xl p-10 border border-gray-700 card-hover transition duration-300">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400 mb-8">
                <i className="fa-solid fa-comments text-3xl"></i>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">Legal Advisory</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Konsultan hukum kami mempublikasikan pendapat hukum (Legal Opinion) yang akurat beserta rancangan solusi taktis yang esensial untuk menyelesaikan konflik hukum individu atau korporasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="layanan" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Layanan Profesional</h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Ruang Lingkup Bantuan Hukum</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="#kontak" className="text-primary-600 font-bold hover:text-navy-900 transition flex items-center gap-2">
                Bicarakan Kasus Anda <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 card-hover">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">Penyusunan Perjanjian</h3>
              <div className="w-12 h-1.5 bg-primary-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Perancangan kontrak kerja, perjanjian kerjasama, draf perdamaian, hingga somasi yang disusun sesuai standar perundang-undangan agar bernilai mutlak sebagai bukti otentik.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 card-hover">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">Hukum Korporasi</h3>
              <div className="w-12 h-1.5 bg-primary-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Penyediaan Tim Legal Eksternal (Retainer) yang menangani masalah ketenagakerjaan, legal audit, mediasi bisnis, hingga pendampingan penuh dalam pelaporan kepolisian & gugatan.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 card-hover">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">Hukum Keuangan</h3>
              <div className="w-12 h-1.5 bg-primary-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Pendampingan komprehensif dalam proses pembiayaan, merger, akuisisi, pendampingan OJK, konsolidasi, restrukturisasi aset, PKPU, serta penanganan proses kepailitan.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 card-hover">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">Pidana & Perdata</h3>
              <div className="w-12 h-1.5 bg-primary-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Pendampingan intensif kasus pidana dan perdata, baik secara litigasi (di pengadilan) maupun non-litigasi (mediasi luar pengadilan) di seluruh tingkatan peradilan Indonesia.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 card-hover">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">Legal Advisory</h3>
              <div className="w-12 h-1.5 bg-primary-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Menerbitkan Pendapat Hukum (Legal Opinion) yang mendalam, strategis, dan solutif guna melindungi kepentingan klien dalam menghadapi manuver hukum pihak lawan.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 card-hover">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">Hak Kekayaan Intelektual</h3>
              <div className="w-12 h-1.5 bg-primary-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Registrasi, pemeliharaan, serta litigasi perlindungan Merek Dagang, Hak Cipta, Paten, Desain Industri, serta manajemen aset HAKI perusahaan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process / Methodology */}
      <section id="pendekatan" className="py-24 bg-slate-50 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Metodologi</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Proses & Pendekatan Kami</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">Langkah terstruktur dan strategis untuk memastikan perlindungan hukum yang maksimal bagi setiap klien kami.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-primary-200 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 bg-white border-4 border-primary-100 group-hover:border-primary-500 rounded-full flex items-center justify-center text-navy-900 font-heading font-bold text-3xl mx-auto mb-6 shadow-xl transition-all duration-300">1</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Evaluasi Awal</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Konsultasi mendalam untuk meninjau dokumen dan memahami duduk perkara secara objektif.</p>
            </div>
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 bg-white border-4 border-primary-100 group-hover:border-primary-500 rounded-full flex items-center justify-center text-navy-900 font-heading font-bold text-3xl mx-auto mb-6 shadow-xl transition-all duration-300">2</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Perumusan Strategi</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Penyusunan taktik hukum presisi dan analisis risiko berdasarkan instrumen fakta dan bukti.</p>
            </div>
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 bg-white border-4 border-primary-100 group-hover:border-primary-500 rounded-full flex items-center justify-center text-navy-900 font-heading font-bold text-3xl mx-auto mb-6 shadow-xl transition-all duration-300">3</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Tindakan Legal</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Eksekusi langkah hukum, baik secara musyawarah (non-litigasi) maupun persidangan (litigasi).</p>
            </div>
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 bg-primary-500 border-4 border-primary-200 group-hover:border-primary-600 group-hover:bg-primary-600 rounded-full flex items-center justify-center text-white font-heading font-bold text-3xl mx-auto mb-6 shadow-xl shadow-primary-500/40 transition-all duration-300">4</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Resolusi Tuntas</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Penyelesaian sengketa hukum dengan orientasi pada hasil yang paling menguntungkan bagi klien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="keunggulan" className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Nilai Inti</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Empat Pilar Kepercayaan</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">Kami tidak sekadar menawarkan jasa hukum, melainkan kemitraan yang didasarkan pada prinsip moral yang kuat demi integritas profesi.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center card-hover transition duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 text-3xl">
                <i className="fa-regular fa-handshake"></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Jujur & Transparan</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Menjaga keterbukaan proses dan estimasi peluang secara realistis. Kejujuran adalah pondasi mutlak dari firma kami.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center card-hover transition duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 text-3xl">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Komitmen Kuat</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Langkah krusial menuju resolusi bermula dari komitmen teguh kami untuk mendampingi dan menuntaskan rintangan hukum Anda.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center card-hover transition duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 text-3xl">
                <i className="fa-regular fa-heart"></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Sepenuh Hati</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Kami menyadari beban psikologis sengketa hukum. Pendekatan kami selalu berlandaskan empati dan tekad tulus untuk melayani.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center card-hover transition duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 text-3xl">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Profesionalitas</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Didukung barisan advokat berlisensi dengan kapabilitas unggul dalam penanganan litigasi maupun negosiasi tingkat tinggi di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case List Detail */}
      <section className="py-20 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-900 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <i className="fa-solid fa-scale-unbalanced text-[300px] -mr-16 -mt-16"></i>
                </div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Lingkup Penanganan Perkara</h3>
                        <div className="w-16 h-1.5 bg-primary-500 mb-6 rounded-full"></div>
                        <p className="text-gray-400 font-light leading-relaxed">Kami memiliki pengalaman ekstensif dan rekam jejak yang solid dalam menyelesaikan ragam sengketa hukum secara taktis dan tuntas.</p>
                        <Link href="#kontak" className="inline-flex items-center gap-2 mt-8 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary-500/30">
                            Hubungi Tim Kami <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-navy-800/50 p-8 rounded-3xl border border-navy-700 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-300 font-light">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Penggelapan & Penipuan</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Penganiayaan & Perusakan</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Pencemaran Nama Baik / Fitnah</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Tindak Pidana Korupsi & Narkoba</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> TPPU (Pencucian Uang)</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Perlindungan Konsumen</li>
                            </ul>
                            <ul className="space-y-4 mt-4 md:mt-0">
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Gugatan Wanprestasi</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Perbuatan Melawan Hukum (PMH)</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Hutang-Piutang & Sengketa Tanah</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Perceraian & Dispensasi Kawin</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Hak Asuh & Harta Gono-gini</li>
                                <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-primary-400 text-[10px]"></i></div> Kekerasan Dalam Rumah Tangga</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>

    {/* Testimoni Klien */}
    <section id="testimoni" className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/5 rounded-full filter blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Ulasan Klien</h4>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Kepercayaan Mereka, Dedikasi Kami</h2>
                <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">Bukti nyata dari komitmen kami dalam memperjuangkan hak dan keadilan bagi setiap klien yang kami dampingi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-navy-900 p-8 rounded-3xl border border-navy-800 hover:border-primary-500/50 transition-colors relative">
                    <i className="fa-solid fa-quote-right absolute top-8 right-8 text-4xl text-navy-800"></i>
                    <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed mb-8 relative z-10">
                        "Sangat bersyukur bisa didampingi oleh tim Feradi WPI. Penanganan sengketa tanah keluarga kami diselesaikan dengan pendekatan mediasi yang sangat efisien dan profesional. Menghemat banyak waktu dan tenaga."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-lg border border-primary-500/30">
                            H.K
                        </div>
                        <div>
                            <h4 className="text-white font-bold">H. K.</h4>
                            <p className="text-xs text-gray-400 mt-1">Klien Perdata - Semarang</p>
                        </div>
                    </div>
                </div>

                <div className="bg-navy-900 p-8 rounded-3xl border border-navy-800 hover:border-primary-500/50 transition-colors relative">
                    <i className="fa-solid fa-quote-right absolute top-8 right-8 text-4xl text-navy-800"></i>
                    <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed mb-8 relative z-10">
                        "Saya awalnya awam soal hukum dan sempat kebingungan menghadapi masalah bisnis perusahaan saya. Legal advisory dari Subur Jaya Law Firm sangat tajam, solutif, dan melindungi aset saya sepenuhnya."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-lg border border-primary-500/30">
                            A.W
                        </div>
                        <div>
                            <h4 className="text-white font-bold">A. W.</h4>
                            <p className="text-xs text-gray-400 mt-1">Klien Korporasi - Jakarta</p>
                        </div>
                    </div>
                </div>

                <div className="bg-navy-900 p-8 rounded-3xl border border-navy-800 hover:border-primary-500/50 transition-colors relative">
                    <i className="fa-solid fa-quote-right absolute top-8 right-8 text-4xl text-navy-800"></i>
                    <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed mb-8 relative z-10">
                        "Berhadapan dengan kasus pidana adalah pengalaman terberat saya, tapi tim advokat di sini bekerja tanpa henti untuk membela hak-hak saya di persidangan. Terima kasih atas dedikasi luar biasanya."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-lg border border-primary-500/30">
                            S.P
                        </div>
                        <div>
                            <h4 className="text-white font-bold">S. P.</h4>
                            <p className="text-xs text-gray-400 mt-1">Klien Pidana - Surabaya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Seksi Artikel Terbaru (Headless WP) */}
    <section id="artikel" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Pusat Informasi</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Artikel & Publikasi Hukum</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover transition duration-300 flex flex-col">
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                    <div className="text-gray-500 text-sm font-light mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                    <div className="mt-auto pt-4">
                      <Link href={`/artikel/${post.slug}`} className="text-primary-600 font-bold hover:text-primary-700 flex items-center gap-2 transition">
                        Baca Selengkapnya <i className="fa-solid fa-arrow-right text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 font-light">Belum ada artikel yang dipublikasikan saat ini.</p>
          )}
        </div>
    </section>

    {/* FAQ Section (Optimasi Tanpa JS) */}
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Informasi Umum</h4>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
                <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
                <details className="group border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="w-full text-left px-6 py-5 bg-slate-50 hover:bg-gray-100 flex justify-between items-center transition-colors cursor-pointer focus:outline-none">
                        <span className="font-bold text-navy-900 text-base md:text-lg pr-4">Apakah sesi konsultasi hukum awal dikenakan biaya?</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                            <i className="fa-solid fa-plus text-primary-500 transition-transform duration-300 group-open:rotate-45 group-open:text-red-500"></i>
                        </div>
                    </summary>
                    <div className="bg-white px-6">
                        <p className="text-gray-600 font-light leading-relaxed pb-5 pt-2 border-t border-gray-100 mt-2">
                            Untuk asesmen atau evaluasi awal melalui WhatsApp mengenai posisi kasus Anda, kami tidak memungut biaya (gratis). Biaya legal fee atau operasional baru akan dibicarakan dan disepakati secara transparan jika Anda memutuskan untuk menunjuk kami sebagai kuasa hukum resmi.
                        </p>
                    </div>
                </details>

                <details className="group border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="w-full text-left px-6 py-5 bg-slate-50 hover:bg-gray-100 flex justify-between items-center transition-colors cursor-pointer focus:outline-none">
                        <span className="font-bold text-navy-900 text-base md:text-lg pr-4">Apa saja dokumen yang perlu disiapkan saat konsultasi?</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                            <i className="fa-solid fa-plus text-primary-500 transition-transform duration-300 group-open:rotate-45 group-open:text-red-500"></i>
                        </div>
                    </summary>
                    <div className="bg-white px-6">
                        <p className="text-gray-600 font-light leading-relaxed pb-5 pt-2 border-t border-gray-100 mt-2">
                            Sangat disarankan untuk menyiapkan kronologi singkat tertulis kejadian, identitas diri (KTP), dan semua dokumen atau bukti terkait perkara (misalnya: kontrak, bukti transfer, surat panggilan, foto, atau tangkapan layar percakapan). Semakin lengkap data Anda, semakin presisi analisa kami.
                        </p>
                    </div>
                </details>

                <details className="group border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="w-full text-left px-6 py-5 bg-slate-50 hover:bg-gray-100 flex justify-between items-center transition-colors cursor-pointer focus:outline-none">
                        <span className="font-bold text-navy-900 text-base md:text-lg pr-4">Apakah Feradi WPI melayani pendampingan di luar kota Semarang?</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                            <i className="fa-solid fa-plus text-primary-500 transition-transform duration-300 group-open:rotate-45 group-open:text-red-500"></i>
                        </div>
                    </summary>
                    <div className="bg-white px-6">
                        <p className="text-gray-600 font-light leading-relaxed pb-5 pt-2 border-t border-gray-100 mt-2">
                            Tentu saja. Dengan lebih dari 20 jaringan kantor cabang dan koneksi advokat serta paralegal di bawah naungan Feradi WPI dan aliansinya, kami siap melayani dan mendampingi kasus hukum Anda di seluruh wilayah yurisdiksi Indonesia.
                        </p>
                    </div>
                </details>

                <details className="group border border-gray-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="w-full text-left px-6 py-5 bg-slate-50 hover:bg-gray-100 flex justify-between items-center transition-colors cursor-pointer focus:outline-none">
                        <span className="font-bold text-navy-900 text-base md:text-lg pr-4">Berapa lama rata-rata proses penyelesaian sebuah perkara?</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                            <i className="fa-solid fa-plus text-primary-500 transition-transform duration-300 group-open:rotate-45 group-open:text-red-500"></i>
                        </div>
                    </summary>
                    <div className="bg-white px-6">
                        <p className="text-gray-600 font-light leading-relaxed pb-5 pt-2 border-t border-gray-100 mt-2">
                            Lama waktu penyelesaian sangat bergantung pada kompleksitas kasus, jenis perkara (pidana/perdata), serta apakah kasus diselesaikan via mediasi (non-litigasi) atau harus menempuh jalur pengadilan (litigasi). Tim kami akan memberikan estimasi waktu secara realistis pada sesi perumusan strategi.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    {/* Contact & Location (Optimasi Form Server-Side) */}
    <section id="kontak" className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                    <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Akses Layanan</h4>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight">Butuh Pendampingan Hukum Segera?</h2>
                    <p className="text-gray-500 font-light mb-10 leading-relaxed">
                        Jangan biarkan sengketa berlarut. Tim advokat kami siap melakukan evaluasi awal dan merumuskan langkah perlindungan legal terbaik untuk Anda.
                    </p>
                    
                    <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 text-xl shrink-0">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-900 mb-1">Kantor Pusat Feradi WPI</h4>
                                <p className="text-gray-600 font-light text-sm leading-relaxed">
                                    Ruko A7 Apartment Candiland,<br />
                                    Jalan Diponegoro 24B, Tegalsari,<br />
                                    Candisari, Kota Semarang 50614
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 text-xl shrink-0">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-900 mb-1">Kontak Langsung</h4>
                                <p className="text-gray-600 font-light text-sm mb-1">Tel/WA: <a href="https://wa.me/6285867531704" target="_blank" rel="noreferrer" className="text-primary-600 font-semibold hover:underline">0858 6753 1704</a></p>
                                <p className="text-gray-600 font-light text-sm">Email: suburjayalawfirm@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 text-xl shrink-0">
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-900 mb-1">Jam Operasional</h4>
                                <p className="text-gray-600 font-light text-sm mb-1">Senin - Jumat: 08:00 - 17:00 WIB.</p>
                                <p className="text-gray-500 font-light text-xs italic">Konsultasi akhir pekan berdasarkan janji temu (Appointment)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 h-full flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-2">Formulir Konsultasi Cepat</h3>
                        <p className="text-gray-500 text-sm font-light mb-8">Isi formulir berikut dan admin kami akan segera mengarahkan Anda ke Advokat yang tepat via WhatsApp.</p>
                        
                        <form action="https://wa.me/6285867531704" target="_blank" className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Nama Lengkap</label>
                                    <input type="text" className="form-input w-full bg-slate-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm transition-all outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15" placeholder="Masukkan nama Anda" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Nomor WhatsApp</label>
                                    <input type="tel" className="form-input w-full bg-slate-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm transition-all outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15" placeholder="Contoh: 0812..." required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Kategori Perkara</label>
                                <select className="form-input w-full bg-slate-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm transition-all cursor-pointer appearance-none outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15">
                                    <option value="" disabled selected>Pilih Kategori Perkara</option>
                                    <option>Hukum Pidana Umum/Khusus</option>
                                    <option>Hukum Perdata & Sengketa</option>
                                    <option>Hukum Perusahaan / Bisnis</option>
                                    <option>Hukum Keluarga / Perceraian</option>
                                    <option>Lainnya / Belum Yakin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Deskripsi Singkat Permasalahan</label>
                                <textarea rows="4" className="form-input w-full bg-slate-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm transition-all resize-none outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15" placeholder="Ceritakan secara singkat kronologi atau bantuan hukum yang Anda butuhkan..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 text-base">
                                Kirim & Lanjutkan ke WhatsApp <i className="fa-brands fa-whatsapp text-xl"></i>
                            </button>
                            <p className="text-[11px] text-center text-gray-400 mt-4">Seluruh informasi yang Anda kirimkan dilindungi oleh asas kerahasiaan Advokat-Klien.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  );
}