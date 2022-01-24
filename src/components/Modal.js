import React, { useState } from "react";
import imgProduct01 from "../images/image-product-1.jpg";
import imgProduct02 from "../images/image-product-2.jpg";
import imgProduct03 from "../images/image-product-3.jpg";
import imgProduct04 from "../images/image-product-4.jpg";
import thmb01 from "../images/image-product-1-thumbnail.jpg";
import thmb02 from "../images/image-product-2-thumbnail.jpg";
import thmb03 from "../images/image-product-3-thumbnail.jpg";
import thmb04 from "../images/image-product-4-thumbnail.jpg";

const Modal = ({ handleClose, setCarousel, carousel, setBorderTmbn, borderTmbn }) => {
  const images = [imgProduct01, imgProduct02, imgProduct03, imgProduct04];
  const thumbs = [thmb01, thmb02, thmb03, thmb04];

  const showImage = images.filter((img, i) => i + 1 == carousel);
  const border = thumbs.filter((tmb, i) => i + 1 == carousel);

  const outline = ["outline-transparent", "outline-primary-1"];

  const nextSelect = () => {
    if (carousel > 3) {
      setCarousel(1);
      setBorderTmbn(1);
    } else {
      setCarousel(carousel + 1);
      setBorderTmbn(borderTmbn + 1);
    }
  };

  const prevSelect = () => {
    if (carousel < 2) {
      setCarousel(4);
      setBorderTmbn(4);
    } else {
      setCarousel(carousel - 1);

      setBorderTmbn(borderTmbn - 1);
    }
  };

  const handleClick = (e) => {
    const list = document.querySelectorAll(".modal ul li");

    [...list].map((li, i) => {
      if (e.target == li.firstElementChild) {
        setCarousel(i + 1);
        setBorderTmbn(i + 1);
      }
    });
  };

  // console.log(carousel);

  return (
    <div className="modal flex items-center justify-center fixed z-50 inset-0 bg-opacity ">
      <div className="lg:w-3/12 lg:h-3/12 md:w-5/12 md:h-5/12 w-3/6 h-3/6 relative">
        <button onClick={prevSelect} className="absolute group top-1/3 -left-4 bg-white-2 w-10 h-10 flex items-center justify-center rounded-full">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="stroke-black group-hover:stroke-primary-1">
            <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>

        {showImage && <img src={showImage} alt="product-image" className="rounded-2xl mb-6 " />}

        <button onClick={nextSelect} className=" absolute group top-1/3 -right-4 bg-white-2 w-10 h-10 flex items-center justify-center rounded-full ">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className="stroke-black group-hover:stroke-primary-1">
            <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>

        <ul className="thumbnails flex justify-between w-4/5 mx-auto ">
          {thumbs &&
            thumbs.map((tmbn, i) => {
              if (border == tmbn) {
                return (
                  <li onClick={handleClick} className={`cursor-pointer group outline rounded-lg overflow-hidden ${outline[1]}  outline-4 w-1/5 bg-white-2 `}>
                    <img src={tmbn} alt={`thumbnail-${i}`} className="tmbn rounded-lg group-hover:opacity-30" />
                  </li>
                );
              } else {
                return (
                  <li onClick={handleClick} className={`cursor-pointer group outline rounded-lg overflow-hidden ${outline[0]}  outline-2 w-1/5 bg-white-2`}>
                    <img src={tmbn} alt={`thumbnail-${i}`} className="tmbn rounded-lg group-hover:opacity-30" />
                  </li>
                );
              }
            })}
        </ul>
        <p>{carousel}</p>
        <p>{borderTmbn}</p>
        <button onClick={handleClose} className="close group absolute right-0 -top-6">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="fill-white-2 group-hover:fill-primary-1">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
