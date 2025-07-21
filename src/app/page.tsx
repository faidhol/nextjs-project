import ProductForm from './products/ProductForm';
import ProductList from './products/ProductList';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-6">Manajemen Produk</h1>
      <ProductForm />
      <ProductList />
    </main>
  );
}
