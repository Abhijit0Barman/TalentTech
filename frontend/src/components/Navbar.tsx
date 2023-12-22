import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const links = [
  { to: "/", label: "Home" },
  { to: "/role", label: "Role" },
  { to: "/about", label: "About" },
  { to: "/signup", label: "SignUp" },
  { to: "/login", label: "LogIn" },
];

export const Navbar = () => {
  const defaultStyle = { textDecoration: "none", color: "#1d8043" };
  const activeStyle = {
    textDecoration: "none",
    color: "orange",
    fontWeight: "bold",
  };
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = (): void => {
    setNav(!nav);
  };

  const handleNavMobile = (): void => {
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center h-20 mx-auto px-4 text-black bg-slate-100">
      <NavLink to={`/`}>
        <h1 className="w-full text-3xl font-bold text-[#1d8043]">
          Talent Tech
        </h1>
      </NavLink>

      <div className="hidden md:flex">
        {links.map((ele) => {
          return (
            <NavLink
              key={ele.to}
              to={ele.to}
              children={<ul className="p-4">{ele.label}</ul>}
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            />
          );
        })}
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-slate-100 ease-in-out duration-500 z-10"
            : "fixed ease-in-out duration-500 left-[-100%]"
        }>
        <h1 className="w-full text-3xl font-bold text-[#1d8043] m-4">
          Talent Tech
        </h1>
        <ul className="uppercase p-4">
          {links.map((ele, ind) => (
            <NavLink
              key={ele.to}
              to={ele.to}
              // children={ele.label}
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
              <div
                onClick={handleNavMobile}
                className="p-4 border-b border-gray-600">
                {ele.label}
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
