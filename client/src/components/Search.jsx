import React from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";

const Search = ({ value, onChange, onSearch, onClearSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <div className="flex items-center w-28 md:w-80 px-2 rounded-md border border-gray-300">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="검색하기"
        className="w-full text-xs md:text-sm bg-transparent py-[10px] outline-none text-gray-500"
      />
      {value ? (
        <IoMdClose
          className="text-gray-500 cursor-pointer text-base hover:text-black mr-3 transition"
          onClick={onClearSearch}
        />
      ) : (
        <IoIosSearch className="text-gray-500 cursor-pointer text-lg hover:text-black mr-3 transition" />
      )}
    </div>
  );
};

export default Search;
