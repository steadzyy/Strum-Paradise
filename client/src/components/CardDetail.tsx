"use client";

import { handleAddWishlist } from "@/action/action";
import { Product } from "@/app/(withNav)/products/[slug]/page";
import formatRupiah from "@/db/helpers/formatRupiah";
import Link from "next/link";

export default function CardDetail({ el }: { el: Product }) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 mb-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden mb-10">
        <div className="card card-side bg-base-100 shadow-xl flex items-center justify-between px-6 py-4 ">
          <div className="absolute ml-16 bottom-60 flex -translate-y-11 transform justify-between">
            <div className="badge badge-outline w-15 text-xs opacity-30">Slide Me ❯</div>
          </div>
         
          <div className="carousel rounded-box w-96 h-fit">
            {el.images.map((image, index) => (
              <div className="carousel-item w-full" key={index}>
                <img
                  src={image}
                  className="w-full"
                  alt={`Carousel image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{el.name}</h2>
            <p className="mt-2 text-gray-600">{el.description}</p>
            <p className="mt-2 text-gray-600">{formatRupiah(el.price)}</p>
            <div className="w-full mt-4 flex justify-center gap-2">
              <button className="btn btn-accent ">Buy Now</button>
              <Link href={"/wishlist"}>
                <button
                  className="btn btn-accent w-full"
                  onClick={() => handleAddWishlist(el._id)}
                >
                  Add To Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
