import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const navItem = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  return (
    <section className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="w-full flex items-center justify-between text-white bg-primary py-4 md:px-10 px-7">
        <Link to="/" className="text-2xl font-semibold">
          LOGO
        </Link>

        <div className="md:hidden cursor-pointer text-white">
          {navIsVisible ? (
            <RiCloseLine className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <RiMenu3Line className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <ul
          className={`shadow-xl md:shadow-none py-3 pb-7 px-5 md:flex md:items-center md:p-0 absolute md:static bg-primary md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease ${
            navIsVisible ? "top-[69px]" : "top-[-490px]"
          }`}
        >
          {navItem.map((item) => (
            <li
              key={item.name}
              className="my-2 pl-2 md:pl-0 md:my-0 md:mx-2 text-xl lg:text-[22px]"
            >
              <Link to={item.href} className="hover:text-gray-400 duration-500">
                {item.name}
              </Link>
            </li>
          ))}
          <button className="mt-2 md:mt-0 md:ml-4 text-lg font-semibold shadow-md bg-[rgba(255,255,255,0.40)] text-white py-1.5 px-4 rounded-md"
            onClick={handleSignInClick}>Sign In</button>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
