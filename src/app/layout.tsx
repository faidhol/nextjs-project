import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Tugas Next.js',
  description: 'Latihan App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '20px', background: '#f0f0f0' }}>
          <Link href="/">Home</Link> |{' '}
          <Link href="/about">About</Link> |{' '}
          <Link href="/profile">Profile</Link> |{' '}
          <Link href="/products/1">Produk 1</Link>
        </nav>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
