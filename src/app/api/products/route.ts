import { NextResponse } from 'next/server';

interface Product {
  id: number;
  name: string;
  price: number;
}

// Data dummy (akan hilang jika server restart)
let products: Product[] = [
  { id: 1, name: 'Meja Belajar', price: 750000 },
  { id: 2, name: 'Kursi Gaming', price: 1200000 }
];

// GET: ambil semua produk
export async function GET() {
  return NextResponse.json(products);
}

// POST: tambah produk baru
export async function POST(req: Request) {
  const body = await req.json();
  const newProduct: Product = {
    id: Date.now(),
    name: body.name,
    price: body.price
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

// PATCH: update produk
export async function PATCH(req: Request) {
  const body = await req.json();
  const index = products.findIndex(p => p.id === body.id);
  if (index === -1) {
    return NextResponse.json({ message: 'Produk tidak ditemukan' }, { status: 404 });
  }
  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

// DELETE: hapus produk
export async function DELETE(req: Request) {
  const body = await req.json();
  products = products.filter(p => p.id !== body.id);
  return NextResponse.json({ message: 'Produk dihapus' });
}
