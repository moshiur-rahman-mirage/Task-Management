import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../providers/Authprovider";
const navitems = ["Home"];

const divVariants = {
  rest: {
    position: "relative",
    borderBottom: "2px solid  transparent", // Set the initial border style
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
  hover: {
    position: "relative",
    borderBottom: "2px solid #ffffff", // Set the border style on hover
  },
};

const MenuButton = ({ item, className = "" }) => {
  return (
    <>
      <motion.div
        variants={divVariants}
        whileHover={{ backgroundColor: "#EBE2F6", borderRadius: "10px" }}
        whileTap="rest"
        style={{
          position: "relative",
          boxSizing: "border-box",
          margin: "5px",
          padding: "5px",
        }}
        initial="rest"
      >
        <NavLink
          className={`${className} rounded-lg gap-4 md:mx-5 text-white md:text-xl text-xs text-left uppercase`}
          to={`${item}`}
        >
          {item}
        </NavLink>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/" || location.pathname === "/Home" || location.pathname === "/TASK MANAGEMENT";

  const handleSignOut = () => {
    logout().then().catch();
  };
  return (
    <motion.div
      className="navbar px-10 fixed z-10"
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: scrolling
          ? "#303031"
          : isHomePage
          ? "transparent"
          : "#303031",
        color: scrolling ? "#fff" : "#fff",
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-start my-[-90px] ">
        <MenuButton
          className="text-md uppercase hidden lg:flex "
          item="Task Management"
        ></MenuButton>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal w-full px-1">
            {navitems.map((item) => {
              return (
                <MenuButton
                  className="uppercase md:text-md text-sm "
                  key={item}
                  item={item}
                />
              );
            })}
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-light rounded-box w-52"
          >
            {navitems.map((item) => {
              return (
                <MenuButton
                  className=" mx-10  text-2xl"
                  key={item}
                  item={item}
                />
              );
            })}
          </ul>
        </div>
        <MenuButton
          className="text-xl uppercase lg:hidden"
          item="Tasker"
        ></MenuButton>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#303956] rounded-box w-52"
            >
              <NavLink
                className="rounded-lg text-white  text-xs text-left uppercase"
                to="/Dashboard"
              >
                My Task
              </NavLink>
              <div>
                <button onClick={handleSignOut}  className="rounded-lg   text-white  text-xs text-left uppercase">
                  Logout
                </button>
              </div>
              {/* </li> */}
            </ul>
          </div>
        ) : (
          <Link
            to="login"
            className="btn btn-outline text-white md:mx-10 mx-2 md:text-xl text-xs text-left uppercase"
          >
            Login
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
