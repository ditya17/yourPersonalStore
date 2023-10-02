import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import ProductCardSkeleton from "../../../components/ProductCardSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/allproduct")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <section className="container mx-auto flex flex-wrap sm:gap-x-5 gap-y-5 px-5 pt-6 pb-10">
      {isLoading
        ? products.map((product) => (
            <ProductCard
              key={product.key}
              classname="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]"
              product={product}
            />
          ))
        : [...Array(4)].map((item, index) => (
            <ProductCardSkeleton
              key={index}
              className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-21px)] lg:w-[calc(25%-20px)]"
            />
          ))}
    </section>
  );
};

export default Products;
