import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
            <a href=" https://www.instagram.com/bavisettinarayan/" target="_blank" >
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-instagram"></i>
              </button>
              </a>
              <a href="https://www.linkedin.com/in/bavisetti-narayan-a94b5918b/" target="_blank" >
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-linkedin"></i>
              </button>
              </a>

 <a href="https://github.com/NarayanBavisetti" target="_blank" >
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
               
                <i className="flex fab fa-github"></i>
              </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/customers" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Customers
                    </Link>
                  </li>
                  <li>
                    <Link to="/transactions" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                       >Transactions
                    </Link>
                  </li>
                  <li>
                    <Link to="/add" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >New Customers
                    </Link>
                  </li>

                </ul>
              </div>
           
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}{" "}
              <a
                href="https://github.com/NarayanBavisetti"
                className="text-gray-600 hover:text-gray-900"
              >
                Bavisetti Narayan
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
