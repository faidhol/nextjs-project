'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function ProductList() {
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>
      <ul className="space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded px-4 py-2 bg-gray-100 flex justify-between"
          >
            <span>{product.name}</span>
            <span className="font-semibold">Rp {product.price.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
