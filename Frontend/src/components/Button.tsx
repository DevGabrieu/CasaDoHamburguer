type ButtonType = {
  title: string;
  variant?: "default" | "outline" | "navigation";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer rounded-md border-[#C92A0E] border-2 bg-[#C92A0E] py-2 text-sm font-bold text-white";
    } else if (variant === "outline") {
      return "w-full cursor-pointer rounded-md border-1 border-[#C92A0E] bg-white py-2 text-sm font-bold text-[#C92A0E]";
    } else if (variant === "navigation") {
      return "w-[35px] w-[130px] cursor-pointer justify-center rounded-sm bg-[#F2DAAC] text-center";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;