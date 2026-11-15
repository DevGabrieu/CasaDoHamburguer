import { ArchiveX, ArrowLeft, ArrowRight } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img src="./duplo-da-casa.png" alt="" className="w-[100px] rounded-md" />
      <div className="flex-1">
        <p className="font-bold text-black uppercase">Duplo da Casa</p>
        <p className="font-bold text-[#848484]">R$ 28,90</p>
        <div className="mt-2 flex items-center gap-3 text-black">
          <ArrowLeft
            size={18}
            className="cursor-pointer rounded-md bg-red-500 text-white"
          />
          <p className="font-bold">10</p>
          <ArrowRight
            size={18}
            className="cursor-pointer rounded-md bg-red-500 text-white"
          />
        </div>
      </div>
      <ArchiveX size={20} className="cursor-pointer text-black" />
    </div>
  );
};

export default CartItem;
