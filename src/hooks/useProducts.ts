import CONSTANTS from "../constants/constants";
import { useQuery } from "react-query";

const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;

interface IRating {
  readonly rate?: number;
  readonly count?: number;
}
export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(productsURL);
  const data = await res.json();

  return data;
};

export const useProducts = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: Infinity,
  });

  const getProductById = (id: number): IProduct | undefined => {
    return products.find((p) => p.id === id);
  };

  return { products, isLoading, error, getProductById };
};
