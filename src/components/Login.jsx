import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { iconClass, inputBase } from "../assets/dummydata";
import { Link } from "react-router-dom";

function Login({ onLoginSuccess, onclose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.rememberMe
      ? localStorage.setItem("loginData", JSON.stringify(formData))
      : localStorage.removeItem("loginData");
    onLoginSuccess();
  };

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const ToggleShowPassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    const stored = localStorage.getItem("loginData");
    if (stored) setFormData(JSON.parse(stored));
  }, []);
  return (
    <div className="space-y-6 relative">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 ">
          <div className="relative">
            <FaUser className={iconClass} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`${inputBase} pl-10 pr-4 py-3`}
            />
          </div>
          <div className="relative">
            <FaLock className={iconClass} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`${inputBase} pl-10 pr-4 py-3`}
            />
            <button
              type="button"
              onClick={ToggleShowPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className=" flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className=" form-checkbox h-5 w-5 text-amber-600 bg-[#2d1b0e] border-amber-400 rounded focus:ring-amber-600"
              />
              <span className=" ml-2 text-amber-100">Remember Me</span>
            </label>
          </div>
          <button className=" w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-[#2d1b0e] font bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            Sign In <FaArrowRight />
          </button>
        </div>
      </form>
      <div className=" text-center">
        <Link
          to={"/signup"}
          onClick={onclose}
          className=" inline-flex items-center gap-2 text-amber-400 hover:text-amber-600 transition-colors"
        >
          <FaUserPlus /> Create New Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
