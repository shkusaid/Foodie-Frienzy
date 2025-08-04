import React, { useEffect } from "react";
import ContactPage from "../components/ContactPage";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactPage />
    </div>
  );
}

export default Contact;
