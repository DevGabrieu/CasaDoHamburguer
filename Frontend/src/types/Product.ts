export type ProductType = {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  category: string;
};

export type ProductProps = ProductType & {
  setProducts?: React.Dispatch<React.SetStateAction<ProductType[]>>;
};
