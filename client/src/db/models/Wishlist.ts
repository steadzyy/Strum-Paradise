import { ObjectId } from "mongodb";
import { z } from "zod";
import db from "../config/mongodb";

const wishlistSchema = z.object({
  productId: z.instanceof(ObjectId),
  userId: z.instanceof(ObjectId),
  createdAt: z.string(),
  updatedAt: z.string(),
});

type wishlistType = {
  productId: ObjectId;
  userId: ObjectId;
  createdAt?: string;
  updatedAt?: string;
};

class Wishlist {
  static collection() {
    return db.collection<wishlistType>("wishlist");
  }
  static async getAll(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(String(userId)),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
    ];
    const wishlist = await this.collection()
      .aggregate(
       agg
      )
      .toArray();
    // console.log(userId, "user<<<<<");

    return wishlist;
  }
  static async getById(id: string) {
    const wishlist = await this.collection().findOne({
      _id: new ObjectId(String(id)),
    });

    if (!wishlist) {
      let error = new Error("wishlist not found");
      error.name = "Not found";
      throw error;
    }
    return wishlist;
  }
  static async create(data: wishlistType) {
    const parseData = wishlistSchema.safeParse(data); //safeParse >> Mengonversi data dari format yang tidak diketahui atau tidak terstruktur ke format yang  / sudah ditulis di schema (misalnya, string ke angka) sambil menangani potensi kesalahan atau data yang tidak valid dengan cara yang tidak akan merusak aplikasi.
    if (!parseData.success) {
      throw parseData.error;
    }
    const { productId, userId } = parseData.data;

        const existingWishlistItem = await this.collection().findOne({
            productId: new ObjectId(productId),
            userId: new ObjectId(userId),
        });

        if (existingWishlistItem) {
            return 'Product already in wishlist'; 
        }
        
    await this.collection().insertOne(data);
    return "success add to wishlist";
  }
  
  static async delete(id: string) {
    // console.log(id, 'ID<><><><><><><>');
    
    const delItem = await this.collection().deleteOne({
      _id: new ObjectId(String(id)),
    });
    console.log(delItem, 'DELITEM<><><><><>');
    
    return "success delete wishlist";
  }
}

export default Wishlist;
