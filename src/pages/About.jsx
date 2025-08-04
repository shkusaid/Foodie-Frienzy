import React, { useEffect } from "react";
import AboutPage from "../components/AboutPage";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutPage />
    </div>
  );
}

export default About;
