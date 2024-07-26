import React, { useState } from "react";
import Search from "./Search";

const Navbar = ({ userInfo }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {};

  return (
    <div className="bg-white flex justify-between items-center px-6 py-2 border-b border-gray-300 md:px-10 md:py-4 lg:px-16">
      <h1 className="text-2xl md:text-3xl font-semibold text-black py-2">
        Notes
      </h1>
      <div className="hidden md:block">
        <Search
          value={searchKeyword}
          onChange={({ target }) => setSearchKeyword(target.value)}
          handleSearch={handleSearch}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <Search
            value={searchKeyword}
            onChange={({ target }) => setSearchKeyword(target.value)}
            handleSearch={handleSearch}
          />
        </div>
        {userInfo ? (
          <button className="text-xs md:text-sm border border-black rounded-md p-2 text-white bg-black hover:opacity-80 transition">
            로그아웃
          </button>
        ) : (
          <button className="text-xs md:text-sm border border-black rounded-md p-2 text-white bg-black hover:opacity-80 transition">
            로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
