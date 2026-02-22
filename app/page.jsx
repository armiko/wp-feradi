import Link from 'next/link';
// Import Navbar dan Footer yang sudah Anda buat dari HTML lama
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// Fungsi mengambil data dari WordPress
async function getPosts() {
  // GANTI URL DI BAWAH DENGAN DOMAIN WORDPRESS ANDA
  const res = await fetch('https://domain-wordpress-anda.com/wp-json/wp/v2/posts?_embed&per_page=3', {
    next: { revalidate: 3600 } // Update data setiap 1 jam
  });
  
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {/* <Navbar /> */}
      
      {/* PASTE SELURUH KODE <section> HERO, ABOUT, LAYANAN, DARI HTML LAMA ANDA DI SINI.
        (Ubah class= menjadi className= karena ini React/JSX) 
      */}

      {/* --- SEKSI ARTIKEL TERBARU (BARU DITAMBAHKAN) --- */}
      <section id="artikel" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Pusat Informasi</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Artikel & Publikasi Hukum</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          </div>

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
                  <div className="mt-auto">
                    <Link href={`/artikel/${post.slug}`} className="text-primary-600 font-bold hover:text-primary-700 flex items-center gap-2 transition">
                      Baca Selengkapnya <i className="fa-solid fa-arrow-right text-sm"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- AKHIR SEKSI ARTIKEL --- */}

      {/* PASTE SEKSI FAQ, KONTAK DARI HTML LAMA ANDA DI SINI
      */}
      
      {/* <Footer /> */}
    </>
  );
}
