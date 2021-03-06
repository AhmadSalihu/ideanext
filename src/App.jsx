import React from "react";
import { Link } from "react-router-dom";
// import { signout } from "./helpers/auth";
import { ToastContainer } from "react-toastify";

function App({ history }) {
  return (
    <div className="bg-gray-80 text-gray-900 flex justify-center">
      <ToastContainer />
      <div className=" m-0 sm:m-10 shadow bg-white sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-8/12 p-6 sm:p-8">
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-4xl xl:text-4xl font-bold text-center">
              Welcome To Idea Next{" "}
            </h1>
            <div className="w-full flex-1 mt-0 text-indigo-500">
              <div className="my-10 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  <strong>Sign Up / Sign In</strong>
                </div>
              </div>
              <div className="mx-auto max-w-xs relative ">
                <Link
                  to="/login"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-sign-in-alt  w-6  -ml-2" />
                  <span className="ml-3">Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-user-plus  w-6  -ml-2" />
                  <span className="ml-3">Sign Up</span>
                </Link>
                {/* <Link
                  to="/private"
                  className="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-sign-in-alt  w-6  -ml-2" />
                  <span className="ml-3">Profile Dashbaord</span>
                </Link>
                <Link
                  to="/admin"
                  className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-sign-in-alt  w-6  -ml-2" />
                  <span className="ml-3">Admin Dashbaord</span>
                </Link> */}
                {/* <button
                  onClick={() => {
                    signout(() => {
                      toast.error("Signout Successfully");
                      history.push("/");
                    });
                  }}
                  className="mt-5 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-sign-out-alt  w-6  -ml-2" />
                  <span className="ml-3">Signout</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default App;
