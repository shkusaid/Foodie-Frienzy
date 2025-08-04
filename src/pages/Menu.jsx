import React, { useEffect } from "react";
import OurMenu from "../components/OurMenu";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <OurMenu />
    </div>
  );
}

export default Menu;
