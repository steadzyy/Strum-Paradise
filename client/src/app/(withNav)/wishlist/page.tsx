"use client";

import WishlistCard from "@/components/WishlistCard";
import { useEffect, useState } from "react";
import { ObjectId } from "mongodb";

export type Wishlist = {
  _id : string
  productId: ObjectId;
  userId: ObjectId;
  createdAt: string;
  updatedAt: string;
  product: Product[];
};

type Product = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);

  const fetchDataWishlist = async () => {
    const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
    let url = link + `/api/wishlist`;
    const res = await fetch(url);
    const data: { data: Wishlist[] } = await res.json();
    // console.log(data, "<<<TEST");

    setWishlist(data.data);
    
  };
  // console.log(wishlist, '<><><><><><>>');
  useEffect(() => {
    fetchDataWishlist();
  }, []);
  return (
    <>
        <div className="w-full flex flex-wrap justify-center mt-3 mb-3">
        <div className="bg-neutral rounded-md w-32 text-center justify-center font-bold text-2xl text-white">Wishlist</div>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-3 mb-3">
        {wishlist.map((el, idx: number) => {
          return <WishlistCard wishlist={el} key={idx} />;
        })}
      </div>
    </>
  );
}
