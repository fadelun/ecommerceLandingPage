import { useState } from "react";
import React from "react";
import avatar from "../../images/image-avatar.png";
import imgProduct01 from "../../images/image-product-1.jpg";
import DeleteIcon from "../../images/icon-delete.svg";
import FormatNumber from "../FormatNumber";
import { Link } from "react-router-dom";

const RightNav = ({ count, cartItems, setCartItems }) => {
  return (
    <div className="rightNav flex items-center justify-end pr-6 w-3/12 md:relative static">
      <div className="cart pr-10 pl-4 group">
        <Link>
          <svg width="22" height="20" className="icon-cart" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="black"
              fillRule="nonzero"
              alt="icon-cart"
            />
          </svg>
        </Link>
        <div className="cart-modal z-50 bg-white-2 absolute md:-left-8 md:-right-4 md:bottom-10 inset-x-0 mx-4 md:top-14 top-20 drop-shadow-2xl rounded-lg md:h-72  hidden ">
          <div className="header py-5 px-4 h-18 border-b-2 border-primary-3">
            <p className="font-bold ">Cart</p>
          </div>
          <div className="body text-blue-2 p-5  h-4/5 flex items-center justify-center">
            {!cartItems && <p className="text-blue-2 font-bold my-20">Your cart is empty</p>}
            {cartItems && (
              <div className="cart-items">
                <div className="item flex justify-between md:mb-4">
                  <div className="product-image w-3/12">
                    <img src={imgProduct01} alt="image-product" className="rounded" />
                  </div>
                  <div className="desc w-3/5">
                    <p>Fall Limited Edition Sneakers</p>
                    <p className="price">
                      $125.00 X {count} <span className="total font-bold text-black">${FormatNumber(125 * count)}.00</span>
                    </p>
                  </div>
                  <button onClick={() => setCartItems(false)}>
                    <img src={DeleteIcon} alt="icon-delete" width={20} />
                  </button>
                </div>
                <Link>
                  <button className="hover:opacity-50 font-bold justify-center rounded-lg bg-primary-1 text-white-1 flex items-center py-6 w-full md:my-0 my-4">Checkout</button>
                </Link>
              </div>
            )}
            {/* <p className="text-blue-2 font-bold ">Hi, this is my cart</p> */}
          </div>
        </div>
      </div>

      <Link>
        <div className="profile-avatar" className="w-12">
          <img src={avatar} alt="profile-avatar" className="outline rounded-full hover:outline-primary-1 outline-transparent outline-2 md:w-12 " />
        </div>
      </Link>
    </div>
  );
};

export default RightNav;
