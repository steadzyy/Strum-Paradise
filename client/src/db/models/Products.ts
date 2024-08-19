import { array, z } from "zod";
import db from "../config/mongodb";

const ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  excerpt: z.string(),
  price: z.number(),
  tags: array(z.string()),
  thumbnail: z.string(),
  images: array(z.string()),
});

type ProductType = z.infer<typeof ProductSchema>;

class Product {
  static collection() {
    return db.collection<ProductType>("products");
  }
  static async getAll(name: string | null, page: string | null) {
    let limit = 6
    let currentPage = page || 1

    const products = await this.collection()
    .find({name : { $regex: name || "", $options: "i"}})
    .skip((Number(currentPage) - 1) * limit )
    .limit(name ? 20 : limit)
    .toArray();
    return products;
  }
  static async getBySlug(slug: string) {
    const product = await this.collection().findOne({
      slug : slug
    })

    if(!product){
      let error = new Error("product not found")
      error.name = "Not Found"
      throw error
    }
    return product
  }
  
}

export default Product