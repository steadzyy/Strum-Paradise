import Carousel from "@/components/Carousel";
import CarouselCard from "@/components/CarouselCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-7">
      <div className="mb-4">
        <Carousel />
      </div>
      
      
      <div className="flex w-full mb-4 gap-2">
        {/* Gambar kiri */}
        <div className="w-1/2 flex justify-center">
          <div className="w-full h-72 overflow-hidden">
            <img
              src="https://blog.sweelee.com/uploads/2023/04/Beginner-Guitars-Under-S700-Electric-Guitars-banner@1200x630-480x252.jpg"
              alt="Left Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Gambar kanan */}
        <div className="w-1/2 flex justify-center">
          <div className="w-full h-72 overflow-hidden">
            <img
              src="https://scontent.cdninstagram.com/v/t39.30808-6/449202177_867190662109518_9093172873372925863_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=joV0bSzecFEQ7kNvgGj_9Os&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&gid=ACisJpRbyLZLEJjK2N8ktEQ&oh=00_AYC4v1oeF_aBCCoPJSeTR6ohx0wiWry5J5l892A18qS78g&oe=66B13E98"
              alt="Right Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="w-full bg-neutral py-4 px-8 flex items-center justify-between rounded-md">
        <h4 className="text-white text-lg font-bold">Featured Products</h4>
        <Link href="/products">
          <p className="hover:underline text-xs text-white">See All Products →</p>
        </Link>
      </div>
      
      <div className="w-full">
        <CarouselCard />
      </div>
    </main>
  );
}
