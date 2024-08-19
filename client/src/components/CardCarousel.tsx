import Link from "next/link";

type Product = {
  name: string;
  slug: string;
  description: string;
  price: string;
  thumbnail: string;
  tags: string[]
};

const CardCarousel = ({ product }: { product: Product }) => {
  return (
    <div className="card bg-base-100 w-72 shadow-xl mx-1"> {/* Ukuran card  */}
      <figure className="w-full h-80 overflow-hidden"> {/* Ukuran gambar  */}
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold mb-2">{product.name}</h2>
      <div className="card-actions flex flex-wrap gap-2 mb-2">
          <div className="badge badge-outline">{product.tags[0]}</div>
          <div className="badge badge-outline">{product.tags[1]}</div>
        </div>
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <div className="card-actions justify-center">
          <Link href={`/products/${product.slug}`}>
          <button className="btn btn-primary">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
