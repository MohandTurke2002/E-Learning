import { AllProducts } from "../_types";
import CardProducts from "./CardProducts";

const MainProducts = ({ products }: Props) => {
  return (
    <>
      <h2 className="text-2xl font-bold pl-5">Latest Products</h2>
      <div className="flex justify-start flex-wrap p-5 gap-5">
        <CardProducts products={products} />
      </div>
    </>
  );
};

type Props = {
  products: AllProducts[];
};

export default MainProducts;
