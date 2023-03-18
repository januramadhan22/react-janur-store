import React, { useState } from "react";
import { RiUser6Line } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";

function Navbar({
  menuBar,
  tabMenu,
  setTabMenu,
  openSearch,
  setOpenSearch,
  onClose,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (index) => {
    setTabMenu(index);
  };

  return (
    <>
      <nav className="sticky top-0 z-20 px-20 py-7 w-full flex items-center justify-center bg-gray-50">
        <div
          onClick={onClose}
          className="w-full h-full absolute top-0 left-0 bg-transparent z-20"
        />
        <button className="relative z-30 px-3 py-1 rounded-lg text-base sm:text-xl active:bg-slate-200 transition-all ease-out">
          J A N U R
        </button>

        <div className="absolute z-30 right-20 hidden md:flex items-center gap-4">
          <div
            onClick={() => setOpenSearch(true)}
            className={`flex items-center gap-1 transition-all ease-out  ${
              openSearch
                ? "w-80 h-9 pl-4 pr-1.5 py-1.5 justify-end rounded-lg duration-300 bg-white z-20 shadow-md"
                : "w-9 h-9 px-1.5 pl-1.5 pr-1.5 justify-end rounded-full duration-200 cursor-pointer hover:bg-slate-300 hover:text-white"
            } `}
          >
            <input
              type="text"
              placeholder="Search Product"
              className={
                openSearch
                  ? "w-full transition-all ease-out duration-300 visible focus:outline-none text-sm bg-transparent relative opacity-200"
                  : "scale-x-0 absolute transition-all ease-out duration-100 bg-transparent opacity-0 placeholder:opacity-0"
              }
            />
            <button
              className={
                openSearch
                  ? "cursor-pointer text-xl mx-0"
                  : "mr-0.5 cursor-pointer text-xl"
              }
            >
              <HiOutlineSearch />
            </button>
          </div>
          <button className="w-9 h-9 p-1.5 flex justify-center items-center rounded-full hover:bg-slate-300 hover:text-white transition-all ease-out duration-200">
            <RiUser6Line className="text-xl" />
          </button>
        </div>

        {/* Mobile View */}
        <div
          className={`bg-gray-50 z-10 w-full h-fit absolute bottom-0 flex md:hidden flex-col items-center transition-all ease-out duration-200 ${
            openMenu ? "translate-y-28" : "translate-y-0"
          }`}
        >
          <div
            className={`flex items-center w-72 sm:w-80 mb-4 px-1.5 py-2 rounded-lg bg-white ${
              openMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search Product"
              className="w-full transition-all ease-out duration-300 visible focus:outline-none text-sm bg-transparent relative opacity-100"
            />
            <button
              className={
                openSearch
                  ? "cursor-pointer text-xl mx-0"
                  : "mr-0.5 cursor-pointer text-xl"
              }
            >
              <HiOutlineSearch />
            </button>
          </div>
          <div
            className={`relative z-10 w-full flex justify-center transition-all ease-out  ${
              openMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <button className="w-[88px] sm:w-28 h-8 sm:h-10 text-center uppercase text-[10px] sm:text-xs rounded-lg hover:bg-slate-200 transition-all ease-out duration-200">
              Discount
            </button>
            <button className="w-[88px] sm:w-28 h-8 sm:h-10 text-center uppercase text-[10px] sm:text-xs rounded-lg hover:bg-slate-200 transition-all ease-out duration-200">
              New Arrival
            </button>
            <button className="w-[88px] sm:w-28 h-8 sm:h-10 text-center uppercase text-[10px] sm:text-xs rounded-lg hover:bg-slate-200 transition-all ease-out duration-200">
              Categories
            </button>
            <button className="w-[88px] sm:w-28 h-8 sm:h-10 text-center uppercase text-[10px] sm:text-xs rounded-lg hover:bg-slate-200 transition-all ease-out duration-200">
              All Products
            </button>
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden block bg-gradient-to-b from-transparent to-slate-100 px-3 sm:px-5 py-1.5 rounded-b-lg shadow-sm text-[8px] text-gray-500"
          >
            {openMenu ? "C L O S E" : "O P E N"}
          </button>
        </div>
      </nav>

      {/* Menubar */}
      <div
        onClick={onClose}
        className="sticky top-[88px] z-20 w-full hidden md:flex md:justify-center bg-gray-50 pb-3 transition-all ease-out"
      >
        {menuBar.map((menu, index) => (
          <button
            key={index}
            onClick={() => toggleMenu(index)}
            className="w-32 h-10 text-center uppercase text-sm rounded-lg hover:bg-slate-200 transition-all ease-out duration-200"
          >
            {menu}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
