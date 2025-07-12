interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Simulasi data produk
const products: Product[] = [
  { id: '1', name: 'Kursi Gaming', price: 1200000, description: 'Kursi ergonomis untuk kenyamanan saat bermain.' },
  { id: '2', name: 'Meja Belajar', price: 750000, description: 'Meja kayu minimalis cocok untuk ruang kerja.' },
  { id: '3', name: 'Lampu LED', price: 150000, description: 'Lampu LED hemat energi untuk kamar tidur.' },
];

interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = params;

  // Cari produk berdasarkan id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h1>Produk tidak ditemukan</h1>
        <p>ID: {id}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>{product.name}</h1>
      <p><strong>Harga:</strong> Rp {product.price.toLocaleString('id-ID')}</p>
      <p>{product.description}</p>
    </div>
  );
}
