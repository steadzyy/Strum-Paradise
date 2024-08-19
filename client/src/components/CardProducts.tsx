"use client";

import { Product } from "@/app/(withNav)/products/page";
import formatRupiah from "../db/helpers/formatRupiah";
import Link from "next/link";
import { handleAddWishlist } from "@/action/action";

const CardProducts = ({ product }: { product: Product }) => {
  return (
    <div className="card bg-base-100 w-80 h-full shadow-xl">
      <figure>
        <img src={product.thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h4 className="card-title flex justify-between items-center">
          {product.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </h4>
        <p>{product.excerpt}</p>
        <p>{formatRupiah(product.price)}</p>
        <div className="card-actions flex flex-wrap gap-2">
          <div className="badge badge-outline">{product.tags[0]}</div>
          <div className="badge badge-outline">{product.tags[1]}</div>
        </div>
        <div className="w-full mt-4 flex justify-center gap-2">
  <Link href={'/wishlist'}>
    <button
      className="btn"
      onClick={() => handleAddWishlist(product._id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  </Link>
  <Link href={`/products/${product.slug}`}>
    <button className="btn btn-active">
      Detail
    </button>
  </Link>
</div>

      </div>
    </div>
  );
};

export default CardProducts;
