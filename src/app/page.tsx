import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>🧑‍💻 Tugas Next.js App Router</h1>
      <p>Halo! Ini adalah halaman utama dari tugas Next.js kamu.</p>

      <div style={{ marginTop: '20px' }}>
        <p>Kunjungi halaman:</p>
        <ul>
          <li><Link href="/about">Tentang Kami</Link></li>
          <li><Link href="/profile">Profil</Link></li>
          <li><Link href="/products/1">Produk 1</Link></li>
        </ul>
      </div>
    </main>
  );
}
