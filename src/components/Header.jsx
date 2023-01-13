import React from "react";
import { useLocation, useNavigate } from "react-router";
import logo from "../images/logo.png";

export default function Header() {
  const Loction = useLocation();
  const navigate = useNavigate();
  function pathMathRote(route) {
    if (route === Loction.pathname) {
      return true;
    }
  }
  return (
    // HEADER
    <header className=" bg-[#fdfdfd]  shadow border-b sticky top-0 z-50 px-2  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto ">
        {/* rightHeader */}
        <div>
          <ul className="flex gap-8 items-center text-center justify-center ">
            <li
              className={`pb-3 cursor-pointer pt-8 text-sm border-b-[3px]  font-semibold text-gray-400 border-b-transparent ${
                pathMathRote("/") && " text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              خانه
            </li>
            <li
              className={`pb-3 cursor-pointer pt-8 text-sm border-b-[3px]  font-semibold text-gray-400 border-b-transparent ${
                pathMathRote("/offers") && " text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              پیشنهاد
            </li>
            <li
              className={`pb-3 cursor-pointer pt-8 text-sm border-b-[3px]  font-semibold text-gray-400 border-b-transparent ${
                pathMathRote("/sign-in") && " text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              ورودیاثبت نام
            </li>
          </ul>
        </div>
        {/* leftHeader */}
        <div>
          <img
            className="h-12 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </header>
  );
}
