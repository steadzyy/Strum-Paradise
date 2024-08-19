"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleAddWishlist = async (productId: string) => {
  try {
    const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(link + `/api/wishlist`, {
      method: "POST",
      body: JSON.stringify({
        productId,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });

    if (!res.ok) {
      return await res.json();
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete("Authorization");
  redirect("/login");
}
