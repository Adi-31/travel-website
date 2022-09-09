import React from "react";
import { CgProfile } from "react-icons/cg";
import { logo, view } from "../assets";
import { navLinks } from "../constants";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Homepage = () => {
  const iconStyle = { color: "white", fontSize: "30px" };

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Homepage;
