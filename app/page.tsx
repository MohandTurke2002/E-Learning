"use client";
import { useEffect, useState } from "react";
import HeroSection from "./_components/HeroSection";
import MainProducts from "./_components/MainProducts";
import { AllProducts } from "./_types";
import productModules from "./_utils/productsAPI";

export default function Home() {
  const [products, setProducts] = useState<AllProducts[]>([]);
  useEffect(() => {
    productModules.getAllProducts().then((res) => setProducts(res.data.data));
  }, []);
  return (
    <>
      <HeroSection />
      <MainProducts products={products} />
    </>
  );
}
