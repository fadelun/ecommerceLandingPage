import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [carousel, setCarousel] = useState(1);
  const [borderTmbn, setBorderTmbn] = useState(null);
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(false);

  useEffect(() => {
    console.log("test");
  }, [carousel, borderTmbn, cart, cartItems]);

  const handleClose = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  const showCart = (e) => {
    const cartModal = document.querySelector(".cart-modal");

    setCart(!cart);
    if (e.target.classList.contains("icon-cart")) {
      cartModal.classList.toggle("hidden");
    }
    //  else if (!e.target.parentNode.classList.contains("cart-modal") && !e.target.parentNode.parentNode.classList.contains("cart-modal")) {
    //   cartModal.classList.add("hidden");
    // }
  };

  const handleClick = (e) => {
    const tmbns = document.querySelectorAll(".product li");

    const tmbnail = [];

    tmbns.forEach((li) => {
      tmbnail.push(li);
    });
  };

  return (
    <Router>
      <div onClick={showCart} className="App lg:w-3/4 md:w-4/5 mx-auto font-body">
        <Navbar handleClick={handleClick} count={count} cartItems={cartItems} setCartItems={setCartItems} />
        <Main setShowModal={setShowModal} setBorderTmbn={setBorderTmbn} setCarousel={setCarousel} carousel={carousel} borderTmbn={borderTmbn} count={count} setCount={setCount} setCartItems={setCartItems} />
        {showModal && <Modal handleClose={handleClose} setCarousel={setCarousel} carousel={carousel} setBorderTmbn={setBorderTmbn} borderTmbn={borderTmbn} />}
      </div>
    </Router>
  );
}

export default App;
