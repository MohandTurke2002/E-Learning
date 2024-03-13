"use client";
import { useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const AddToCartBtn = () => {
  const { user } = useUser();
  const navigate = useRouter();
  const handleAddToCart = () => {
    if (!user) {
      navigate.push("/sign-in");
    }
  };
  return (
    <button
      className="flex gap-2 items-center bg-primary py-2 px-4 text-white w-fit rounded-md hover:bg-hover transition-all"
      onClick={handleAddToCart}
    >
      <ShoppingCart />
      <p>Add To Cart</p>
    </button>
  );
};

export default AddToCartBtn;
