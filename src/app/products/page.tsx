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

    if (editId) {
      await fetch('/api/products', {
        method: 'PATCH',
        body: JSON.stringify({ id: editId, name, price }),
      });
    } else {
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({ name, price }),
      });
    }

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
    <main style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Daftar Produk</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nama produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button onClick={handleSubmit}>
          {editId ? 'Update' : 'Tambah'} Produk
        </button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: '10px' }}>
            <strong>{p.name}</strong> - Rp {p.price.toLocaleString('id-ID')}
            <button onClick={() => handleEdit(p)} style={{ marginLeft: '10px' }}>Edit</button>
            <button onClick={() => handleDelete(p.id)} style={{ marginLeft: '5px' }}>Hapus</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
