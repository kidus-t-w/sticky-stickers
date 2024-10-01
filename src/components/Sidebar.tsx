"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { IoMenu, IoPeopleSharp, IoReceiptSharp, IoSettings } from "react-icons/io5";
import { FaArrowAltCircleLeft, FaStore } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const SideBar = () => {
  // State to control whether the sidebar is expanded or collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle the collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-72"
      } h-screen p-6 shadow-lg flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        {/* Toggle Button */}
        <div className={`${isCollapsed ? "flex justify-start": "flex justify-end"}`}>
          <button
            onClick={toggleSidebar}
            className="mb-4 text-gray-700 focus:outline-none"
          >
            {isCollapsed ? <IoMenu className="text-3xl"/> : <GrClose  className="text-2xl"/>}
          </button>
        </div>

        {/* Logo and Menu Title */}
        <Link href="/" className="flex items-center mb-8">
          <Image src="/logo.png" alt="Finns Logo" width={40} height={40} />
          {!isCollapsed && (
            <h1 className="ml-2 text-xl font-bold text-gray-700">
              Sticky Stickers
            </h1>
          )}
        </Link>

        {!isCollapsed && (
          <h3 className="text-sm uppercase mb-6 text-gray-700">Menu</h3>
        )}

        {/* Menu Items */}
        <nav className="space-y-4">
          <Link href="/dashboard">
            <p className="flex items-center  rounded-lg text-gray-700 h-14 hover:bg-orange-200">
              <MdDashboard className="text-gray-700 text-2xl mx-1" />
              {!isCollapsed && <span className="ml-3">Dashboard</span>}
            </p>
          </Link>
          <Link href="/dashboard/orders">
            <p className="flex items-center rounded-lg text-gray-700 h-14 hover:bg-orange-200">
              <IoReceiptSharp className="text-2xl mx-1" />
              {!isCollapsed && <span className="ml-3">Orders</span>}
            </p>
          </Link>
          <Link href="/dashboard/products">
            <p className="flex items-center rounded-lg text-gray-700 h-14 hover:bg-orange-200">
              <FaStore className="text-2xl mx-1" />
              {!isCollapsed && <span className="ml-3">Products</span>}
            </p>
          </Link>
          <Link href="/dashboard/users">
            <p className="flex items-center rounded-lg text-gray-700 h-14 hover:bg-orange-200">
              <IoPeopleSharp className="text-2xl mx-1" />
              {!isCollapsed && <span className="ml-3">Users</span>}
            </p>
          </Link>
          <Link href="/dashboard/settings/access">
            <p className="flex items-center rounded-lg text-gray-700 h-14 hover:bg-orange-200">
              <IoSettings className="text-2xl mx-1" />
              {!isCollapsed && <span className="ml-3">Settings</span>}
            </p>
          </Link>
        </nav>
      </div>

      {/* User Profile */}
      <div className="mt-12 flex items-center">
        <Image
          src="/assets/hero-section/hero.png"
          alt="Christopher"
          width={40}
          height={40}
          className="rounded-full object-cover w-[40px] h-[40px]"
        />
        {!isCollapsed && (
          <div className="ml-3">
            <p className="text-gray-700 font-semibold">Christopher</p>
            <p className="text-gray-500 text-sm">
              Designer <span className="text-blue-500">Pro</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
