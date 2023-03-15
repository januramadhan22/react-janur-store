import React, { useState } from "react";
import { RiUser6Line } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="relative px-20 py-5 w-full flex items-center justify-end">
      <button className="absolute right-1/2">J A N U R</button>

      <div className="flex items-center gap-4">
        <div
          className={`flex items-center gap-1 transition-all ease-out  ${
            openSearch
              ? "w-80 h-9 pl-4 pr-1.5 py-1.5 justify-end rounded-lg duration-300 bg-slate-50"
              : "w-9 h-9 px-1.5 pl-1.5 pr-1.5 justify-end rounded-full duration-200 hover:bg-slate-300 hover:text-white"
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
            onClick={() => setOpenSearch(!openSearch)}
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
    </nav>
  );
}

export default Navbar;
