import { AllProducts } from "@/app/_types";
import Image from "next/image";

const ProductBanner = ({ productsBanner }: Props) => {
  return (
    <>
      {productsBanner && (
        <Image
          src={productsBanner.attributes.banner.data.attributes.url}
          alt="product-banner"
          className="w-[500px] h-[300px] rounded-lg shadow-lg"
          width={300}
          height={300}
        />
      )}
    </>
  );
};

type Props = {
  productsBanner: AllProducts | undefined;
};

export default ProductBanner;
