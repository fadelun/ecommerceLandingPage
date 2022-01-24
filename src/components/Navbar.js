import LeftNav from "./navbar/LeftNav";
import RightNav from "./navbar/RightNav";

const Navbar = ({ count, cartItems, setCartItems }) => {
  return (
    <div className="Navbar flex justify-between px-2 items-center md:border-b-2 border-gray-300 lg:py-0 py-2  ">
      <LeftNav />
      <RightNav count={count} cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Navbar;
