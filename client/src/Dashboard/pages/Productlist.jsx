import React, { useEffect, useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Productlist = () => {
  const [, setUserData] = useState(null);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem("user"));
    setUserData(userDataFromStorage);
  
    fetch(`http://localhost:5000/api/products?email=${userDataFromStorage?.email}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((product, index) => ({
          key: index + 1,
          category: product.category,
          brand: product.brand,
          price: product.price, 
          action: "Action", 
        }));
        setProducts(formattedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  
  return (
    <div>
      <h3 className="mb-4 title">Your Products</h3>
      <div>
        <Table columns={columns} dataSource={products} />
      </div>
    </div>
  );
};

export default Productlist;
