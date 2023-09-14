import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Products from "./container/Products";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Products />
    </MainLayout>
  );
};

export default HomePage;
