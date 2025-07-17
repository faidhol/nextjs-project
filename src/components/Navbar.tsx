'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Tentang' },
  { href: '/profile', label: 'Profil' },
  { href: '/products', label: 'Produk' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-6">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:underline ${
                pathname === href ? 'font-bold underline' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
