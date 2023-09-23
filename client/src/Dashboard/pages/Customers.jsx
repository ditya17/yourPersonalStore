import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
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
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  
  return (
    <div>
      <h3 className="mb-4 title">Users</h3>
      <div>
        <Table columns={columns}  />
      </div>
    </div>
  );
};

export default Customers;
