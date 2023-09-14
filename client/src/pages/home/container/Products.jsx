import React from "react";
import ProductCard from "../../../components/ProductCard";

const Products = () => {
  return (
    <section className="container mx-auto flex flex-wrap sm:gap-x-5 gap-y-5 px-5 pt-6 pb-10">
      <ProductCard classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]" />
      <ProductCard classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]" />
      <ProductCard classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]" />
      <ProductCard classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]" />
      <ProductCard classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]" />
      <ProductCard classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]" />
    </section>
  );
};

export default Products;
