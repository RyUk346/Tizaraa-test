"use client"; // Importing useCart hook
import { useCart } from "./cart";
import { useState } from "react";
import CartPopup from "./cartPopup";

export default function NavBar() {
  const { cart } = useCart(); // Accessing cart from context
  const [isCartOpen, setIsCartOpen] = useState(false); // State to track cart popup visibility
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items in the cart

  // Function to toggle cart popup visibility
  const toggleCartPopup = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="navbar bg-[#F5F3FF]">
        {/* Before lg breakpoint: menu icon on the left and logo centered */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M4 5L16 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 19L12 19"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="/viewProduct.js">Shop</a>
              </li>

              <li>
                <a href="#deals">Deals</a>
              </li>
              <li>
                <a href="#new">What's New</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo at the center before lg and left after lg */}
        <div
          id="logo"
          className="navbar-start sm:navbar-center lg:navbar-start lg:pl-[50px] "
        >
          <div
            type="button"
            id="logo"
            className="btn btn-ghost mr-[50px] flex "
          >
            <img src="/wf.png" alt="Logo" className="" />
            <h1 className="text-[29.39px] font-bold font-nunito">
              We<span className="text-[#581FC1]">5</span>ive
            </h1>
          </div>
        </div>

        {/* Menu items for larger screens */}
        <div className="navbar-center hidden lg:flex ml-[-235px]">
          <ul className="menu btn-ne menu-horizontal px-1">
            <li>
              <a href="#home" className="text-[#581FC1]">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-[#581FC1]">Shop</a>
            </li>

            <li>
              <a href="#deals" className="hover:text-[#581FC1]">
                Deals
              </a>
            </li>
            <li>
              <a href="#new" className="hover:text-[#581FC1]">
                What's New
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-2">
          <div className="relative hidden sm:flex items-center mr-4">
            <button className="btn btn-ghost btn-circle absolute left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="input rounded-3xl w-full pl-12"
            />
          </div>

          <button className="btn btn-ghost btn-circle sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="indicator" onClick={toggleCartPopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="badge-sm rounded-full indicator-item bg-black text-white">
              {totalItems}
            </span>
          </button>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
              className="ml-2"
            >
              <path
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {isCartOpen && <CartPopup closePopup={toggleCartPopup} />}
    </>
  );
}
