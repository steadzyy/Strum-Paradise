import Wishlist from "@/db/models/Wishlist"
import { ObjectId } from "mongodb"
import { z } from "zod"


export async function GET(request:Request){
    const userId = request.headers.get("x-id") as string
    const wishlist = await Wishlist.getAll(userId)
    // console.log(wishlist, "WISHLISTT<<<<<<<<<<<<<<");   
     
    return Response.json({
        data : wishlist
    })
}

export async function POST(request: Request){
    try {
        const userId = request.headers.get("x-id") as string
        const body : { productId : string } =  await request.json()
        const wishlist = await Wishlist.create({
            productId : new ObjectId(String(body.productId)),
            userId : new ObjectId(String(userId)),
            createdAt : new Date().toISOString(),
            updatedAt : new Date().toISOString()
        })

        if (wishlist === 'Product already in wishlist') {
          return Response.json({ message: wishlist }, { status: 400 });
      }
      
        return Response.json({
            data : wishlist
        })
    } catch (error) {
        if(error instanceof z.ZodError){
            return Response.json(
                {
                    error: error.issues.map((el) => el.path[0] + " " +  el.message),
                },
                {
                    status : 400
                }
            )
        }
    }
}

export async function DELETE(request: Request) {
    try {
      const body: { id: string } = await request.json();
      // console.log(body,`---------`);
      const wishlist = await Wishlist.delete(body.id);
      // console.log(del, "<<<<<<<<<<<<<<");
  
      return Response.json({
        data: wishlist,
      });
    } catch (error) {
      console.log(error);
      
      if (error instanceof z.ZodError) {
        return Response.json(
          {
            error: error.issues.map((el) => el.path[0] + " " + el.message),
          },
          {
            status: 400,
          }
        );
      }
      return Response.json(
        {
          error: `internal server error`,
        },
        {
          status: 500,
        }
      );
    }
  }