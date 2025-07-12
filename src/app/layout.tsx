import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> | ...
        </nav>
        {children}
      </body>
    </html>
  );
}
