import { useState } from "react";
import CardPedido from "../components/CardPedido";

const Pedidos = () => {
  const [category, setCategory] = useState("Hamburguer");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategory = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";
    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };
  return (
    <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
      {/* Categorias */}
      <div className="mt-1 mb-3 flex gap-2 md:my-3">
        <div
          className={getCategory("Pendentes")}
          onClick={() => handleChangeCategory("Pendentes")}
        >
          Pendentes
        </div>
        <div
          className={getCategory("Retirados")}
          onClick={() => handleChangeCategory("Retirados")}
        >
          Retirados
        </div>
        <div
          className={getCategory("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>
      {/* Card dos Pedidos*/}
      <div className="grid grid-cols-3 gap-3">
        <CardPedido
          id={1}
          name={"Gabriel"}
          date="27/12/2027"
          orderTime="21:00"
          deliveredTime="21:15"
          total={124.75}
        />
      </div>
    </div>
  );
};

export default Pedidos;
