'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/productSlice';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    dispatch(addProduct({ id: Date.now(), name, price: parseFloat(price) }));
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div>
        <label className="block font-semibold">Nama Produk</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contoh: Sepatu"
        />
      </div>
      <div>
        <label className="block font-semibold">Harga</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Contoh: 250000"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Tambah Produk
      </button>
    </form>
  );
}
