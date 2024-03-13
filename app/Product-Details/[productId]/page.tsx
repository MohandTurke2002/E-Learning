/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useParams } from "next/navigation";
import BreadCrumbs from "./_components/BreadCrumbs";
import { useEffect, useState } from "react";
import productModules from "@/app/_utils/productsAPI";
import { AllProducts } from "@/app/_types";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import MainProducts from "@/app/_components/MainProducts";
import SkeletonProductBanner from "./_components/SkeletonProductBanner";
import SkeletonProductInfo from "./_components/SkeletonProductInfo";

const MainProductDetails = () => {
  const { productId } = useParams();

  const [products, setProducts] = useState<AllProducts>();
  const [productsCategory, setProductsCategory] = useState<AllProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productModules.getProductById(productId).then((res) => {
      setProducts(res.data.data);
      productModules
        .getProductsByCategory(res.data.data.attributes.category)
        .then((res) => {
          setProductsCategory(res.data.data);
          setLoading(false);
        });
    });
  }, [productId]);

  return (
    <>
      <BreadCrumbs />

      <div className="flex flex-col md:flex-row justify-around px-5 py-5 gap-5">
        {loading ? (
          <SkeletonProductBanner />
        ) : (
          <ProductBanner productsBanner={products} />
        )}
        {loading ? (
          <SkeletonProductInfo />
        ) : (
          <ProductInfo productsInfo={products} />
        )}
      </div>

      <MainProducts products={productsCategory} />
    </>
  );
};
export default MainProductDetails;
