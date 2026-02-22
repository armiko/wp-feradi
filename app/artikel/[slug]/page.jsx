import Link from 'next/link';

// Fungsi mengambil satu artikel berdasarkan slug
async function getPost(slug) {
  try {
    const res = await fetch(`https://feradi.dahono.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600, tags: ['wordpress'] } // Menggunakan tags untuk auto-refresh
    });
    
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Gagal mengambil artikel:", error);
    return null;
  }
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">Artikel tidak ditemukan</h1>
          <Link href="/#artikel" className="text-primary-600 hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const date = new Date(post.date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <main className="pt-24 pb-32 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        <Link href="/#artikel" className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:text-navy-900 transition">
          <i className="fa-solid fa-arrow-left"></i> Kembali ke Beranda
        </Link>

        <article className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-10 pb-10 border-b border-gray-100">
            <span className="flex items-center gap-2"><i className="fa-regular fa-calendar"></i> {date}</span>
          </div>

          {/* LOGIKA GAMBAR CERDAS: Cloudinary Direct atau Cloudinary Fetch */}
          {(post.cloudinary_url || (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]?.source_url)) && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
              <img 
                src={post.cloudinary_url ? post.cloudinary_url : `https://res.cloudinary.com/dy3wbouns/image/fetch/f_auto,q_auto/${post._embedded['wp:featuredmedia'][0].source_url}`} 
                alt={post.title.rendered} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

      </div>
    </main>
  );
}