import { ArchiveX, ArrowLeft, ArrowRight } from "lucide-react";
import { formatterPrice } from "../utils/formatterPrice";

type CartItemType = {
  title: string;
  price: number;
  img: string;
  id: string;
};

const CartItem = ({ title, price, img, id }: CartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./${img}`} alt="" className="w-[100px] rounded-md" />
      <div className="flex-1">
        <p className="text-sm font-bold text-black uppercase">{title}</p>
        <p className="text-sm font-bold text-[#848484]">
          {formatterPrice(price)}
        </p>
        <div className="mt-2 flex items-center gap-3 text-black">
          <ArrowLeft
            size={18}
            className="cursor-pointer rounded-md bg-red-500 text-white"
          />
          <p className="text-sm font-bold">1</p>
          <ArrowRight
            size={18}
            className="cursor-pointer rounded-md bg-red-500 text-white"
          />
        </div>
      </div>
      <ArchiveX
        size={20}
        className="cursor-pointer text-black"
        onClick={() => alert(id)}
      />
    </div>
  );
};

export default CartItem;
