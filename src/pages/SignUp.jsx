import React, { useState } from "react";
import { Link } from "react-router-dom";
import key from "../images/key.jpg";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formDate, setFormDate] = useState({
    name :"",
    email: "",
    password: "",
  });
  const {name, email, password } = formDate;
  function onChange(e) {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">ثبت نام</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto flex-col-reverse lg:flex-row ">
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
          <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="نام "
            />
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="آدرس ایمیل"
            />
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type="password"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="پسورد"
              />
            </div>
            <div className="flex justify-between">
              <p>
                <Link
                  className="py-2 px-6 bg-red-500 text-slate-50 rounded"
                  to="/sign-in"
                >
                  {" "}
                  ورود
                </Link>
              </p>
              <p>
                <Link
                  className="b bg-blue-400 py-2 px-4 rounded"
                  to="/forgot-password"
                >
                  فراموشی رمز عبور
                </Link>
              </p>
            </div>
            <button
              className="w-full text-white bg-amber-600 mt-6 py-3 px-4 rounded"
              type="submit"
            >
              {" "}
              ثبت نام
            </button>
            <OAuth/>
          </form>
        </div>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="rounded-2xl w-full " src={key} alt="key" />
        </div>
      </div>
    </section>
  );
}
