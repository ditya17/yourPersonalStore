import React, { useState,useEffect,useRef } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineUnorderedList,  AiOutlineUser,
} from "react-icons/ai";
import "../Dash.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { BsFillCartPlusFill, BsCartCheck } from "react-icons/bs";
import { BiCategoryAlt,BiLogOut,BiUserCircle } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayoutUser = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);


  useEffect(() => {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);
    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleSignoutClick = () => {
    if (modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    }
  };
  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="lg-logo">logo</span>
          </h2>
        </div>
        <hr className=" my-20" />
        <hr className=" my-10" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              icon: <BiUserCircle className="fs-1" />,
              label: "User",
            },
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "profile",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Profile",
            },
            {
              key: "product",
              icon: <BsFillCartPlusFill className="fs-4" />,
              label: "Add Product",
            },
            {
              key: "list-product",
              icon: <BsCartCheck className="fs-4" />,
              label: "Product List",
            },
            {
              key: "category",
              icon: <BiCategoryAlt className="fs-4" />,
              label: "Category",
            },
            {
              key: "list-category",
              icon: <AiOutlineUnorderedList className="fs-4" />,
              label: "Category List",
            },
            <hr className=" my-10" />,
            <hr className=" my-10" />,
            <hr className=" my-10 " />,

            {
              key: "logout",
              icon: <BiLogOut className="fs-4" />,
              label: "LogOut",
            },

          ]}

        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">admin</h5>
                <p className="mb-0">admin@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                <Link
            className="dropdown-item py-1 mb-1"
            onClick={handleSignoutClick} // Open the modal when clicked
          >
            Signout
          </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>

         {/*  <!-- Logout Modal--> */}
         <div
  className={`modal fade ${isLogoutModalOpen ? "show" : ""}`} // Conditionally apply "show" class to open the modal
  id="logoutModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden={!isLogoutModalOpen} // Hide the modal when not open
  ref={modalRef} // Assign the ref to the modal element
>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Ready to Leave?
        </h5>
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="modal" // Specify how the modal is dismissed
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        Select "Logout" below if you are ready to end your current session.
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-secondary"
          type="button"
          data-bs-dismiss="modal" // Specify how the modal is dismissed
        >
          Cancel
        </button>
        <a className="btn btn-primary" href="/">
          Logout
        </a>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
};
export default MainLayoutUser;
