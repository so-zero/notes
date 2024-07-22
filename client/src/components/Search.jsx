import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = ({ value, onChange, handleSearch }) => {
  return (
    <div className="flex items-center w-28 md:w-80 px-2 rounded-md border border-gray-300">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="검색하기"
        className="w-full text-xs md:text-sm bg-transparent py-[10px] outline-none text-gray-500"
      />
      <IoIosSearch
        onClick={handleSearch}
        className="text-gray-500 cursor-pointer text-lg hover:text-black mr-3 transition"
      />
    </div>
  );
};

export default Search;
