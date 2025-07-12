interface Props { params: { id: string } }

export default function ProductPage({ params }: Props) {
  const { id } = params;
  return <h1>Detail Produk {id}</h1>;
}
