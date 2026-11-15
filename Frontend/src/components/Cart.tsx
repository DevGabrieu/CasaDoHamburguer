import { CircleX } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";

type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
  return (
    <div className="absolute right-0 flex h-screen w-[375px] flex-col bg-[#F2DAAC] p-5">
      <div className="flex justify-between">
        <CircleX
          className="cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        />
        <p className="font-bold uppercase">Meu Carrinho</p>
      </div>

      <div className="mt-10 flex-1 flex flex-col gap-2">
        <CartItem />
        <CartItem />
      </div>

      <Button title="Finalizar Pedido" />
    </div>
  );
};

export default Cart;
