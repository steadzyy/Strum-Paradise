import CardCarousel from "./CardCarousel";

async function fetchDataCarousel() {
  const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
  const data = await fetch(link + "/api/products", {
      method : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache : "no-store"
  });

  if (!data.ok) {
    throw new Error("Products not found");
  }
  return data.json();
}

type Product = {
  name: string;
  slug: string;
  description: string;
  price: string
  thumbnail: string
  tags : string[]
};

async function CarouselCard() {
  const data : {data: Product[]} = await fetchDataCarousel();
  // console.log(data, "<<<DATAA");

  return (
    <>
      <div className="carousel carousel-end w-full">
        {data.data.slice(0, 10).map((el, idx) => (
          <div className="carousel-item " key={idx}>
            <CardCarousel product={el} key={idx} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselCard;
