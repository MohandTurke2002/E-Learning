import Image from "next/image";
import { AllProducts } from "../_types";
import { List } from "lucide-react";
import { useRouter } from "next/navigation";

const CardProducts = ({ products }: Props) => {
  const navigate = useRouter();
  return (
    <>
      {products.map(({ id, attributes }) => {
        return (
          <button
            key={id}
            onClick={() => navigate.push(`/Product-Details/${id}`)}
            className="flex flex-col rounded-lg overflow-hidden w-fit shadow-md hover:scale-105 hover:shadow-xl transition-all"
          >
            <Image
              src={attributes.banner.data.attributes.url}
              alt="product-image"
              width={400}
              height={400}
              className=" w-[360px] h-[200px] "
            />
            <div className="flex justify-between w-full items-center py-3 px-4">
              <div>
                <h3 className="text-xl">{attributes.title}</h3>
                <div className="flex gap-1 items-center text-gray-500 uppercase">
                  <List />
                  <p>{attributes.category}</p>
                </div>
              </div>
              <p>{attributes.price} €</p>
            </div>
          </button>
        );
      })}
    </>
  );
};

type Props = {
  products: AllProducts[];
};

export default CardProducts;
