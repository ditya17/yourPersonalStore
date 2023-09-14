import React, { useState } from "react";
import ProductImage from "../assets/productImage.jpg";

import { RxHeartFilled, RxHeart } from "react-icons/rx";

const ProductCard = ({ classname }) => {
  const [click, setClick] = useState(false);

  return (
    <div
      className={`rounded-md overflow-hidden border-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative ${classname}`}
    >
      <img
        src={ProductImage}
        alt="product"
        className="w-full object-fill object-center h-60 px-8 pt-3"
      />
      <div className="p-3 border-l-[5px] border-primary mt-[2px]">
        <h2 className="text-lg font-semibold">DBMS Quantum</h2>
        <div className="flex justify-between items-center mt-2">
          <p>₹ 120.00</p>
          <p className="text-xs">SEPT 14</p>
        </div>
      </div>
      <div>
        {click ? (
          <RxHeartFilled
            size={24}
            className="cursor-pointer absolute bg-[rgba(0,0,0,0.40)] rounded-full h-8 w-8 p-[5px] top-3 right-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#fff"}
            title="Remove from wishlist"
          />
        ) : (
          <RxHeart
            size={24}
            className="cursor-pointer absolute bg-[rgba(0,0,0,0.40)] rounded-full h-8 w-8 p-[5px] top-3 right-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#fff"}
            title="Add to wishlist"
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
