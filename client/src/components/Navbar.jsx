import React, { useState } from "react";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "../redux/user/userSlice";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = ({ userInfo, handleSearchPost, handleClearSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = () => {
    if (searchKeyword) {
      handleSearchPost(searchKeyword);
    }
  };

  const onClearSearch = () => {
    setSearchKeyword("");
    handleClearSearch();
  };

  const handleLogout = async () => {
    dispatch(logoutStart());

    const URL = `${import.meta.env.VITE_BACKEND_URL}/auth/logout`;
    try {
      const response = await axios.get(URL, { withCredentials: true });

      toast.success(response.data.message);
      dispatch(logoutSuccess(response.data));
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      dispatch(logoutFailure(error.message));
    }
  };

  return (
    <div className="bg-white flex justify-between items-center px-6 py-2 border-b border-gray-300 md:px-10 md:py-4 lg:px-16">
      <h1 className="text-2xl md:text-3xl font-semibold text-black py-2">
        Notes
      </h1>
      <div className="hidden md:block">
        <Search
          value={searchKeyword}
          onChange={({ target }) => setSearchKeyword(target.value)}
          onSearch={onSearch}
          onClearSearch={onClearSearch}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <Search
            value={searchKeyword}
            onChange={({ target }) => setSearchKeyword(target.value)}
            onSearch={onSearch}
            onClearSearch={onClearSearch}
          />
        </div>
        {userInfo ? (
          <button
            onClick={handleLogout}
            className="text-xs md:text-sm border border-black rounded-md p-2 text-white bg-black hover:opacity-80 transition"
          >
            로그아웃
          </button>
        ) : (
          <Link
            to="/login"
            className="text-xs md:text-sm border border-black rounded-md p-2 text-white bg-black hover:opacity-80 transition"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
