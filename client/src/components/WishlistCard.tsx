import { Wishlist } from "@/app/(withNav)/wishlist/page";
import {  useRouter } from "next/navigation";
import formatRupiah from "@/db/helpers/formatRupiah";
import { ButtonRemoveWishlist } from "./RemoveWishlistButton";

type WishlistCardProps = {
  wishlist: Wishlist;
};

const WishlistCard: React.FC<WishlistCardProps> = ({ wishlist }) => {
  // console.log(wishlist, "WISHLIST<><><><>");
  
  const product = wishlist.product[0]; 
  const router = useRouter()
  return (
    <div className="card bg-base-100 w-72 shadow-xl mx-1 mb-3">
      <figure>
      <div className="carousel rounded-box w-96 h-fit">
            {wishlist.product[0].images.map((image, index) => (
              <div className="carousel-item w-full" key={index}>
                <img
                  src={image}
                  className="w-full"
                  alt={`Carousel image ${index + 1}`}
                />
              </div>
            ))}
          </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{wishlist.product[0].name}</h2>
        <p>{wishlist.product[0].excerpt}</p>
        <p>{formatRupiah(wishlist.product[0].price)}</p>
        <div className="w-full mt-4 flex justify-center gap-2">
          <button className="btn btn-secondary">Buy Now</button>
          <ButtonRemoveWishlist id={wishlist._id}/>

        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
