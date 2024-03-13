import { AllProducts } from "@/app/_types";
import { BadgeAlert, BadgeCheck } from "lucide-react";
import AddToCartBtn from "./AddToCartBtn";

const ProductInfo = ({ productsInfo }: Props) => {
  return (
    <>
      {productsInfo && (
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            {productsInfo.attributes.title}
          </h1>
          <p className="text-base text-gray-600 w-full md:w-[500px]">
            {productsInfo.attributes.description[0].children[0].text}
          </p>
          <div className="flex items-center gap-2 ">
            {productsInfo.attributes.available ? (
              <>
                <BadgeCheck className="text-primary" />
                <h1 className="text-primary">Available Now</h1>
              </>
            ) : (
              <>
                <BadgeAlert className="text-red-500" />
                <h1 className="text-red-500">Not Available Right Now</h1>
              </>
            )}
          </div>

          {productsInfo.attributes.available && (
            <h1 className="text-xl text-primary">
              € {productsInfo.attributes.price}
            </h1>
          )}

          {productsInfo.attributes.available && <AddToCartBtn />}
        </div>
      )}
    </>
  );
};

type Props = {
  productsInfo: AllProducts | undefined;
};

export default ProductInfo;
