import React, { useState, useEffect } from "react";
import { logo, view } from "../assets";
import styles from "../style";
import { CgProfile } from "react-icons/cg";

import { navLinks } from "../constants";

const Navbar = () => {
  // const [show, setShow] = useState(true);
  const iconStyle = { color: "white", fontSize: "38px" };
  // const bgPic = { background-image: {view}}

  // const controlNavbar = () => {
  //   if (window.scrollY > 100) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  // return show ? (
  //   <div
  //     className={`w-full pt-10 pb-4 mb-2 flex fixed ease-out duration-200 ${styles.paddingX}`}
  //   >
  //     {/* <h1>Navbar</h1> */}
  //     <img src={logo} alt="travelgoo" className="w-[56px] h-[40px] ml-2" />

  //     <ul className="list-none sm:flex hidden justify-center items-center flex-1">
  //       {navLinks.map((nav, index) => (
  //         <li
  //           key={nav.id}
  //           className={`font-poppins font-normal cursor-pointer lg:text-[20px] text-[16px] mx-10 text-white`}
  //         >
  //           <a href={`#${nav.id}`}>{nav.title}</a>
  //         </li>
  //       ))}
  //     </ul>
  //     <div className="p-2 flex justify-center items-center cursor-pointer">
  //       <CgProfile style={style} />
  //     </div>
  //   </div>
  // ) : (
  //   <div></div>
  // );

  return (
    <div className={`w-full md:mt-5 mb-0 ease-in duration-200`}>
      <nav className="relative container mx-auto px-8 pt-6">
        {/* <img className="absolute top-0" src={view} alt="view" /> */}
        <div className="flex items-center justify-between ">
          <img src={logo} alt="travelgoo" className="w-[54px] h-[40px]" />

          <ul className="list-none md:flex hidden justify-center space-x-12 flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer lg:text-[20px] text-[16px] text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="cursor-pointer">
            <CgProfile style={iconStyle} />
          </div>
          {/* <img className="absolute" src={view} alt="view" /> */}
        </div>
        {/* <img src={view} className="container absolute top-0 left-0 m-0 -z-10" /> */}
      </nav>
    </div>
  );
};

export default Navbar;
