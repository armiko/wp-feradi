import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Mengambil token rahasia dari URL
  const secret = request.nextUrl.searchParams.get('secret');

  // Pastikan token cocok agar tidak sembarang orang bisa me-refresh web Anda
  // Ganti 'FERADI_RAHASIA_123' dengan kata sandi acak Anda sendiri
  if (secret !== 'poweredbydahono.com') {
    return NextResponse.json({ message: 'Token tidak valid' }, { status: 401 });
  }

  try {
    // Memperbarui halaman beranda (/) agar artikel terbaru muncul di list
    revalidatePath('/');
    
    // Memperbarui semua rute dinamis artikel
    revalidatePath('/artikel/[slug]', 'page');

    return NextResponse.json({ revalidated: true, message: 'Berhasil update!' });
  } catch (err) {
    return NextResponse.json({ message: 'Error saat revalidate' }, { status: 500 });
  }
}