import { Link } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="w:md-[737px] mx-auto flex w-full items-center justify-between p-3 md:p-0">
        <img src="./logo.png" alt="" />
        <Link to="/login">
          <Button title="Entrar" variant="navigation"></Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
