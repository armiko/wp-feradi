import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mengambil satu artikel berdasarkan slug
async function getPost(slug) {
  // GANTI URL DI BAWAH DENGAN DOMAIN WORDPRESS ANDA
  const res = await fetch(`https://domain-wordpress-anda.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  });
  
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export default async function ArticlePage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-navy-900">Artikel tidak ditemukan</h1>
      </div>
    );
  }

  // Format tanggal WordPress
  const date = new Date(post.date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <>
      {/* <Navbar /> */}
      
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

            {post._embedded && post._embedded['wp:featuredmedia'] && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  alt={post.title.rendered} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Plugin @tailwindcss/typography (prose) memastikan konten HTML dari WP rapi */}
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>

        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}