import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== 'FERADI_RAHASIA_123') {
    return NextResponse.json({ message: 'Token tidak valid' }, { status: 401 });
  }

  try {
    // Tambahan parameter 'layout' akan menghapus cache SELURUH halaman website
    // (Beranda, halaman /artikel, dan seluruh detail artikel)
    revalidatePath('/', 'layout');

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(), 
      message: 'Cache SELURUH website berhasil dihapus!' 
    });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}