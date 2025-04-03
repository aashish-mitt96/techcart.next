"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-14 lg:px-16 pb-2 pt-1 text-black bg-gradient-to-r from-white to-blue-100">
      {/* Left Section - Logo + echCart text + Home and Shop links */}
      <div className="flex items-center justify-center gap-6">
        <Image
          className="cursor-pointer w-10 md:w-12 -mr-10"
          onClick={() => router.push("/")}
          src={assets.logo1}
          alt="logo"
        />
        <Link href="/" className="text-2xl font-semibold mt-2 cursor-pointer">
          echCart
        </Link>
        <Link
          href="/"
          className="hidden md:inline-block hover:text-blue-700 transition mt-3 ml-8"
        >
          Home
        </Link>
        <Link
          href="/all-products"
          className="hidden md:inline-block hover:text-blue-700 transition mt-3"
        >
          Collections
        </Link>
      </div>

      {/* Center Section - Search Bar (Hidden on mobile screens) */}
      <div className="flex-grow flex justify-center">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-3/4 md:w-[500px] py-2 pl-10 mt-1 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
          />
          {/* Search icon shown only on md screens and larger */}
          <Image
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            src={assets.search_icon}
            alt="search icon"
          />
        </div>
      </div>

      {/* Right Section - Icons and Buttons */}
      <div className="flex items-center gap-4 mt-2">
        {/* Seller Dashboard Button */}
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border border-gray-700 px-4 py-1.5 rounded-full text-black hover:bg-gray-200 hover:text-gray-900 transition hidden md:block"
          >
            Seller Dashboard
          </button>
        )}

        {/* Account Icon & Button */}
        <ul className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<CartIcon />}
                    onClick={() => router.push("/cart")}
                  />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<BagIcon />}
                    onClick={() => router.push("/my-orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </>
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 hover:text-blue-700 transition"
            >
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
          )}
        </ul>

        {/* Mobile View - Only show on small screens */}
        <div className="flex items-center md:hidden gap-3">
          {/* Seller Dashboard Button for Mobile (Visible on small screens only) */}
          {isSeller && (
            <button
              onClick={() => router.push("/seller")}
              className="text-xs border border-gray-700 px-4 py-1.5 rounded-full text-black hover:bg-gray-200 hover:text-gray-900 transition"
            >
              Seller Dashboard
            </button>
          )}
          {user ? (
            <>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<CartIcon />}
                    onClick={() => router.push("/cart")}
                  />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<BagIcon />}
                    onClick={() => router.push("/my-orders")}
                  />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Home"
                    labelIcon={<HomeIcon />}
                    onClick={() => router.push("/")}
                  />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Collections"
                    labelIcon={<BoxIcon />}
                    onClick={() => router.push("/all-products")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </>
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 hover:text-blue-700 transition"
            >
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
