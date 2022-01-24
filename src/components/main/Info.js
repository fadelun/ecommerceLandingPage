import iconMinus from "../../images/icon-minus.svg";
import iconPlus from "../../images/icon-plus.svg";

const Info = ({ count, setCount, setCartItems }) => {
  const plusClick = () => {
    setCount(count + 1);
  };

  const minusClick = () => {
    setCount(count - 1);
    if (count < 1) {
      setCount(0);
    }
  };

  return (
    <div className="info box-border md:py-24 md:px-22 py-4 px-10 ">
      <h6 className="font-bold text-sm leading-7  text-primary-1 uppercase  mb-2">Sneaker Company</h6>
      <h2 className="font-bold text-4xl mb-4">Fall Limited Edition Sneakers</h2>
      <p className="mb-4 text-blue-3">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <ul className="price font-bold flex justify-between  items-center flex-wrap mb-4 lg:w-2/5 w-full">
        <p className="main text-2xl pr-4">$125.00</p>
        <p className="discount text-primary-1 px-2 py-1 rounded-md bg-primary-2  ">50%</p>
        <p className="scracth-line line-through text-blue-3 flex-auto align-end lg:justify-start flex justify-end">$250.00</p>
      </ul>

      <div className="buttons md:flex justify-between w-full mb-5">
        <div className="calculate bg-white-1  flex justify-between rounded-lg items-center md:w-4/12 md:my-0 my-4">
          <button onClick={minusClick} className="minus py-2 hover:opacity-50 px-4">
            <img src={iconMinus} alt="icon-minus" />
          </button>
          <p className="count font-bold"> {count}</p>
          <button onClick={plusClick} className="plus py-2 hover:opacity-50  px-4">
            <img src={iconPlus} alt="icon-plus" />
          </button>
        </div>

        <button onClick={() => setCartItems(count > 0 && true)} className="add-to-cart hover:opacity-50 font-bold justify-center rounded-lg bg-primary-1 text-white-1 flex items-center py-6 md:w-7/12 w-full md:my-0 my-4">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-4">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Info;
// export { Info, count };
