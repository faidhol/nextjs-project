'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    if (!name || !price) return;

    const method = editId ? 'PATCH' : 'POST';
    const body = JSON.stringify({ id: editId, name, price });

    await fetch('/api/products', {
      method,
      body,
    });

    setName('');
    setPrice(0);
    setEditId(null);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/products', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setName(product.name);
    setPrice(product.price);
    setEditId(product.id);
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Manajemen Produk</h1>

      <div className="bg-white p-4 shadow-md rounded mb-6">
        <h2 className="text-xl font-semibold mb-3">
          {editId ? 'Edit Produk' : 'Tambah Produk'}
        </h2>
        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded px-3 py-2"
            type="text"
            placeholder="Nama Produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded px-3 py-2"
            type="number"
            placeholder="Harga"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            {editId ? 'Update' : 'Tambah'} Produk
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-gray-600">Rp {p.price.toLocaleString('id-ID')}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => handleEdit(p)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(p.id)}
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
