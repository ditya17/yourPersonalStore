import React, { useState, useEffect } from "react";
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
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of user objects
        // Add a "sno" property to each user object
        const usersWithSno = data.map((user, index) => ({
          ...user,
          sno: index + 1, // Serial number starts from 1
        }));
        setUserData(usersWithSno);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <h3 className="mb-4 title">Users</h3>
      <div>
        <Table columns={columns} dataSource={userData} />
      </div>
    </div>
  );
};

export default Users;
