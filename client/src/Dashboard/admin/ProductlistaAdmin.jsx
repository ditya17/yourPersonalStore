import React, { useEffect, useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
    dataIndex: "sno",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
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
    title: "Year",
    dataIndex: "year",
  },
  {
    title: "Type",
    dataIndex: "types",
  },
  {
    title: "Product",
    dataIndex: "products",
  },
  {
    title: "Subject",
    dataIndex: "subject",
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

const ProductlistaAdmin = () => {
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/allproduct")
      .then((response) => response.json())
      .then((data) => {
        const usersWithSno = data.map((product, index) => ({
          ...product,
          sno: index + 1,
        }));
        setUserData(usersWithSno);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  
  return (
    <div>
      <h3 className="mb-4 title">ALL Products</h3>
      <div>
      <Table columns={columns} dataSource={userData} />
      </div>
    </div>
  );
};

export default ProductlistaAdmin;
