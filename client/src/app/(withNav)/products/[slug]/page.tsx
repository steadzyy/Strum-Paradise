import CardDetail from "@/components/CardDetail";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

export type Product = {
  _id : string
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  tags: string[];
  excerpt: string;
  price: number;
  images: string[]
};

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug
 
  // fetch data
  const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
  const product : {product : Product} = await fetch(link + `/api/products/${id}`).then((res) => res.json())
  // console.log(product, 'PRODUCT<<><><><>>');
  
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.product.name,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

async function fetchDataProduct(slug : string) {
  // console.log(slug);
  const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
  const data = await fetch(link + `/api/products/${slug}`);

  if (!data.ok) {
    throw new Error("Products not found");
  }
  // console.log(data , "DDDDDDAAAAAAATTTTTAAAA");
  
  return await data.json();
}

const PageDetail = async ({params}: {params : {slug:string}}) => {
  const data: { product: Product } = await fetchDataProduct(params.slug);
  // console.log(data, "<<><><><><><><>");
  
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {/* {data.product((el, idx) => ( */}
        <div  className="flex-shrink-0"> 
        <CardDetail el={data.product}  />
        </div>
      {/* ))} */}
    </div>
  );
};

export default PageDetail;
