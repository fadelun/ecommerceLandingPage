import Info from "./main/Info";
import Product from "./main/Product";

const Main = ({ setShowModal, setBorderTmbn, setCarousel, carousel, borderTmbn, count, setCount, setCartItems }) => {
  return (
    <main className="box-border lg:flex lg:w-11/12 w-full mx-auto ">
      <Product setShowModal={setShowModal} setBorderTmbn={setBorderTmbn} setCarousel={setCarousel} carousel={carousel} borderTmbn={borderTmbn} />
      <Info count={count} setCount={setCount} setCartItems={setCartItems} />
    </main>
  );
};

export default Main;
