import imgProduct01 from "../../images/image-product-1.jpg";
import imgProduct02 from "../../images/image-product-2.jpg";
import imgProduct03 from "../../images/image-product-3.jpg";
import imgProduct04 from "../../images/image-product-4.jpg";
import thmb01 from "../../images/image-product-1-thumbnail.jpg";
import thmb02 from "../../images/image-product-2-thumbnail.jpg";
import thmb03 from "../../images/image-product-3-thumbnail.jpg";
import thmb04 from "../../images/image-product-4-thumbnail.jpg";

const Product = ({ setShowModal, setBorderTmbn, setCarousel, carousel, borderTmbn }) => {
  const images = [imgProduct01, imgProduct02, imgProduct03, imgProduct04];
  const thumbs = [thmb01, thmb02, thmb03, thmb04];

  const showImage = images.filter((img, i) => i + 1 === carousel);

  const handleClick = (e) => {
    const list = document.querySelectorAll(".product ul li");

    [...list].map((li, i) => {
      if (e.target === li.firstElementChild) {
        setShowModal(true);
        setCarousel(i + 1);
        setBorderTmbn(i + 1);
      }
    });
  };

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

  return (
    <div className="product relative box-border md:px-28 md:pt-14 md:pb-2 ">
      {window.innerWidth <= 768 ? <img src={showImage} alt="image-product" className=" md:rounded-2xl md:mb-6  mx-auto" /> : <img src={imgProduct01} alt="image-product" className=" md:rounded-2xl md:mb-6  mx-auto" />}

      <ul className="thumbnails md:flex justify-between hidden">
        {thumbs &&
          thumbs.map((thmb, i) => {
            return (
              <li onClick={handleClick} key={i} className="cursor-pointer group outline rounded-lg overflow-hidden outline-transparent active:outline-primary-1 outline-2 w-1/5">
                <img src={thmb} alt={`thumbnail-${i}`} className="tmbn rounded-lg group-hover:opacity-30" />
              </li>
            );
          })}
      </ul>
      <div className="carousel-buttons md:hidden">
        <button onClick={prevSelect} className=" absolute group top-1/3 left-4 bg-white-2 w-10 h-10 flex items-center justify-center rounded-full ">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="stroke-black group-hover:stroke-primary-1">
            <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>

        <button onClick={nextSelect} className=" absolute group top-1/3 right-4 bg-white-2 w-10 h-10 flex items-center justify-center rounded-full">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className="stroke-black group-hover:stroke-primary-1">
            <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
