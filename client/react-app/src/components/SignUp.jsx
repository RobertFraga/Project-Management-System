import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen flex fle-col items-center justify-center p-6">
        <div className="grid lg:grid-cols-2 items-center gap-8 max-w-6xl max-lg:max-w-lg w-full">
          <form className="lg:max-w-md w-full border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto">
            <h1 className="text-slate-900 text-3xl font-semibold mb-8">
              Create an account
            </h1>
            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm mb-2 block">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="bg-gray-100 w-full text-slate-900 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  className="bg-gray-100 w-full text-slate-900 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="bg-gray-100 w-full text-slate-900 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  className="ml-3 block text-sm text-slate-600"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Register
              </button>
            </div>
            <p className="text-sm !mt-6 text-center text-slate-600">
              Already have an account? <Link to="/LogIn">Login here</Link>
            </p>
          </form>

          <div className="h-full">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full object-contain aspect-[628/516]"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
