import Product from "@/db/models/Products"

type slug = {
    params: {
        slug:string
    }
}

export async function GET(request: Request, {params}: slug){
    console.log(params.slug, '<<<<');
    
    try {
        const product = await Product.getBySlug(params.slug)
        return Response.json({product})
    } catch (error : any) {
        if(error.name === 'BSONError'){
            return Response.json({msg : "Invalid Slug"}, {status : 400})
        }

        if(error.name === 'Not Found'){
            return Response.json({msg : error.message}, {status : 404})
        }
        return Response.json({error}, {status:500})
    }
}