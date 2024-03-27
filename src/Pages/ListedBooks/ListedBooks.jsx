import React, { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import ReadBooks from "../../Component/ReadBooks";

const ListedBooks = () => {
  const [index, setIndex] = useState(0);
  const book = useLoaderData();
  return (
    <div>
      <div className="mt-10 mb-5">
        <h2 className="text-5xl text-center workFair font-bold    ">Books</h2>
        <div className="text-center mt-6">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#23BE0A] text-white hover:text-black hover:border-[#23BE0A] hover:bg-transparent"
            >
              SortBy
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* tabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}
      <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setIndex(0)}
          rel="noopener noreferrer"
          className={` ${
            index === 0 ? "border-b-0" : "border-b"
          } flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Reads Books</span>
        </Link>
        <Link
          to="wishlist"
          onClick={() => setIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={` ${
            index === 1 ? "border-b-0" : "border-b"
          } flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
