import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import logo from "./../assets/Logo.webp";

function Navbar() {
  const [nav, setnav] = useState(false);
  const Clicked = () => setnav(false);

  const Menus = [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "Services",
      path: "services",
    },
    {
      name: "Categories",
      path: "steps",
    },
    {
      name: "About Us",
      path: "customer",
    },
    {
      name: "FAQs",
      path: "faqs",
    },
  ];

  return (
    <>
      <div className="" id="home">
        <div className="bg-white shadow-md fixed right-0 left-0 top-0 z-50">
          <div className="container px-3 sm:px-6 md:px-8 xl:px-20">
            <nav className="flex justify-between items-center py-6 select-none">
              <Link to="home" offset={-40}>
                <img
                  className="object-cover w-20 cursor-pointer"
                  src={logo}
                  alt="Logo"
                />
              </Link>

              <ul
                className={`md:!flex xl:gap-16 lg:gap-10 md:gap-5 justify-center items-center md:bg-transparent bg-light-blue w-[70%] h-screen md:h-auto absolute top-0 -right-0 md:static p-4 md:p-0 pt-14 md:pt-0 z-20 text-dark-blue duration-300 transition-all 
              md:right-0 md:opacity-100 ${
                nav ? "opacity-100 right-0 " : "-right-[100%] opacity-0"
              }`}
              >
                {Menus.map((menu, index) => {
                  return (
                    <Link
                      key={index}
                      className="px-3 py-2 md:px-0 md:py-0 hover:bg-white md:bg-transparent text-base cursor-pointer active:underline active:underline-offset-4 active:decoration- active:duration-300 hover:font-medium flex"
                      duration={500}
                      offset={-40}
                      smooth={true}
                      onClick={Clicked}
                      to={menu.path}
                    >
                      {menu.name}
                    </Link>
                  );
                })}

                <RxCross2
                  onClick={() => setnav(false)}
                  className="text-black md:hidden absolute right-6 top-6 cursor-pointer"
                  size={30}
                />
              </ul>

              <div className="flex gap-1 lg:gap-6">
                <button className="flex rounded-full py-[8px] lg:py-[10px] px-5 text-dark-blue border border-dark-blue text-xs md:text-base font-bold">
                  SignUp
                </button>
                <button className="flex rounded-full py-[8px] lg:py-[10px] px-5 text-white bg-dark-blue border border-dark-blue text-xs md:text-base font-bold">
                  Login
                </button>
                <div
                  className="md:hidden flex items-center"
                  onClick={() => setnav(true)}
                >
                  <HiBars3BottomRight
                    className="text-black cursor-pointer"
                    size={30}
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
