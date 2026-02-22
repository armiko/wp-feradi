import Link from 'next/link';

// Fungsi mengambil data DARI WordPress (mengambil lebih banyak artikel, misal 12)
async function getAllPosts() {
  try {
    const res = await fetch('https://feradi.dahono.com/wp-json/wp/v2/posts?_embed&per_page=12', {
      next: { revalidate: 3600, tags: ['wordpress'] } // Menggunakan tags untuk auto-refresh
    });
    
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Gagal mengambil semua artikel WP:", error);
    return [];
  }
}

export default async function AllArticlesPage() {
  const posts = await getAllPosts();

  return (
    <main className="pt-24 pb-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Header Halaman */}
        <div className="text-center mb-16">
          <h4 className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-3">Pusat Informasi</h4>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Semua Artikel & Publikasi</h1>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"></div>
          <Link href="/#artikel" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-navy-900 transition">
            <i className="fa-solid fa-arrow-left"></i> Kembali ke Beranda
          </Link>
        </div>

        {/* Daftar Semua Artikel */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover transition duration-300 flex flex-col">
                
                {/* LOGIKA GAMBAR CERDAS: Cloudinary Direct atau Cloudinary Fetch */}
                {(post.cloudinary_url || (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]?.source_url)) && (
                  <img 
                    src={post.cloudinary_url ? post.cloudinary_url : `https://res.cloudinary.com/dy3wbouns/image/fetch/f_auto,q_auto/${post._embedded['wp:featuredmedia'][0].source_url}`} 
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
          <p className="text-center text-gray-500 font-light bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
            Belum ada artikel yang dipublikasikan saat ini.
          </p>
        )}
      </div>
    </main>
  );
}