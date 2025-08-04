import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SpecialOffer from "../components/SpecialOffer";
import { AboutHome } from "../components/AboutHome";
import HomeMenu from "../components/HomeMenu";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <SpecialOffer />
      <AboutHome />
      <HomeMenu />
    </>
  );
}

export default Home;
