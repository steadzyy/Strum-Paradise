"use client";

import CardProducts from "@/components/CardProducts";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export type Product = {
  _id: string
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  tags: string;
  excerpt: string;
  price: number;
  images: string[]
};

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, SetQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function fetchDataProduct() {
    const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
    let url = link + `/api/products?page=${page}`;
    if (query) {
      url = link + `/api/products?name=${query}`;
      setPage(1);
    }
    const res = await fetch(url);
    const dataProduct: { data: Product[] } = await res.json();
    if (query) {
      setProducts(dataProduct.data);
      setHasMore(false);
    } else {
      setProducts((prev) => {
        return [...prev, ...dataProduct.data];
      });
      setPage(page + 1);
      if (dataProduct.data.length === 0) {
        setHasMore(false);
      }
    }
  }
  useEffect(() => {
    fetchDataProduct();
  }, [query]);

  return (
    <>
      <div className="flex-1 flex justify-center ">
        <div className="form-control w-full mt-5 max-w-xl text-yellow-950">
          <input
            value={query}
            onChange={(e) => SetQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered text-black w-full"
          />
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between px-20 py-7">
        <InfiniteScroll
          dataLength={products.length}
          next={fetchDataProduct}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<h4>No More Product To See..</h4>}
        >
          <div className="w-full flex flex-wrap justify-center gap-4">
            {products.map((el, idx: number) => (
              <div key={idx} className="flex-shrink-0">
                <CardProducts product={el}  key={idx}/>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </main>
    </>
  );
};

export default Page;
