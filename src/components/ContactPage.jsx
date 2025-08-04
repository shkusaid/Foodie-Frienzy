import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMapPin, FaPhone } from "react-icons/fa";
import { FiArrowRight, FiGlobe, FiMail, FiMessageSquare } from "react-icons/fi";
import { contactFormFields } from "../assets/dummydata";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    dish: "",
    query: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    toast.success("your Query has been submitted successfully", {
      style: {
        border: "2px solid #f59eob",
        padding: "16px",
        color: "#fff",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: { primary: "#f59eob", secondary: "#fff" },
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      dish: "",
      query: "",
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className=" min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 to-gray-900 animate-gradient-x py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font[poppins] relative overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 400 }}
      />
      {/* ADDITIONAL DECORATIVE ELEMENTS */}
      <div className=" absolute top-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full animate-float" />
      <div className=" absolute bottom-40 right-20 w-16 h-16 bg-orange-500/20 rounded-full animate-float-delayed" />

      <div className=" max-w-7xl mx-auto relative z-10 ">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">
          <span className=" bg-clip-text text-transparent  bg-gradient-to-r from-amber-400 to-orange-300">
            Connect With Us
          </span>
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CONTACT INFO SECTION */}
          <div className=" space-y-6">
            <div className=" relative bg-white/5 backdrop-blur-lg  rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-amber-500 hover:border-amber-400 group">
              <div className=" absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className=" flex items-center mb-4 relative z-10">
                <div className=" p-3 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-xl">
                  <FaMapPin className=" text-amber-400 text-2xl animate-pulse" />
                </div>
                <h3 className=" ml-4 text-amber-100 text-xl font-semibold">
                  Our HeadQuarter
                </h3>
              </div>
              <div className=" pl-12 relative z-10">
                <p className=" text-amber-100 font-light text-lg">
                  {"Faisalabad , Punjab ,Pakistan"}
                </p>
              </div>
            </div>
            <div className=" relative bg-white/5 backdrop-blur-lg  rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-green-500 hover:border-green-400 group">
              <div className=" absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className=" flex items-center mb-4 relative z-10">
                <div className=" p-3 bg-gradient-to-br from-green-500/10 to-green-700 rounded-xl">
                  <FaPhone className=" text-green-400 text-2xl animate-ping" />
                </div>
                <h3 className=" ml-4 text-amber-100 text-xl font-semibold space-y-2">
                  Contact
                </h3>
              </div>
              <div className=" pl-12 relative z-10">
                <p className=" text-amber-100 font-light text-lg  flex items-center">
                  <FiGlobe className=" text-green-400 text-xl mr-2" />
                  {"+92 326 1019892"}
                </p>
              </div>
            </div>
            <div className=" relative bg-white/5 backdrop-blur-lg  rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-orange-500 hover:border-orange-400 group">
              <div className=" absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className=" flex items-center mb-4 relative z-10">
                <div className=" p-3 bg-gradient-to-br from-orange-500/30 to-orange-700/30 rounded-xl">
                  <FiMail className=" text-orange-400 text-2xl animate-pulse" />
                </div>
                <h3 className=" ml-4 text-orange-100 text-xl font-semibold">
                  Email Address
                </h3>
              </div>
              <div className=" pl-12 relative z-10">
                <p className=" text-amber-100 font-light text-lg">
                  {"shkusaid910@gmail.com"}
                </p>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <div className="relative bg-white/5 backdrop-blur-lg  rounded-2xl p-6 shadow-2xl animate-slide-in-right border-2 border-amber-500/30 hover:border-amber-500/50 transform-border duration-300">
            <div className=" absolute -top-4 -right-4 w-12 h-12  bg-amber-500/30 rounded-full animate-ping-slow" />
            <form onClick={handleSubmit} className=" space-y-6 relative z-10">
              {contactFormFields.map(
                ({ label, name, type, placeholder, pattern, Icon }) => {
                  return (
                    <div key={name}>
                      <label className=" block text-amber-100  text-sm font-medium mb-2">
                        {label}
                      </label>
                      <div className=" relative">
                        <div className=" absolute left-3 top-1/2 transform -translate-y-1/2">
                          <Icon className=" text-amber-500 text-xl animate-pulse" />
                        </div>
                        <input
                          type={type}
                          value={formData[name]}
                          name={name}
                          onChange={handleChange}
                          className=" w-full rounded-xl pl-10 pr-4 py-3 bg-white/10 border-2 border-amber-500  text-amber-50  focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-amber-200"
                          placeholder={placeholder}
                        />
                      </div>
                    </div>
                  );
                }
              )}
              <div>
                <label className=" block text-amber-100 text-sm font-medium mb-2">
                  Your Query
                </label>
                <div className=" relative">
                  <div className=" absolute left-3 top-4">
                    <FiMessageSquare className=" text-amber-500 text-lg animate-pulse" />
                  </div>
                  <textarea
                    rows="4"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className=" w-full rounded-xl pl-10 pr-4 py-3 bg-white/10 border-2 border-amber-500  text-amber-50  focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-amber-200"
                    placeholder="Type Your Query ..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                className=" w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:bg-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/20 flex items-center justify-center group space-x-2"
                type="submit"
              >
                <span>Submit Query</span>
                <FiArrowRight className=" w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
