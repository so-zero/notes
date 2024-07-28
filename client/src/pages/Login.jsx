import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Password from "../components/input/Password";
import { MdEventNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/user/userSlice";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    const URL = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;

    try {
      const response = await axios.post(
        URL,
        { email, password },
        { withCredentials: true }
      );
      await response.data;
      toast.success(response.data.message);
      dispatch(loginSuccess(response.data));
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="mt-20 flex flex-col max-w-screen-sm mx-auto min-h-[500px]">
      <MdEventNote size={60} className="mx-auto" />
      <form className="flex flex-col gap-1 mt-10 px-10" onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
          className="w-full text-base bg-transparent border px-5 py-4 rounded-md mb-4 outline-none"
        />
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-500 p-1">{error}</p>}
        <button
          type="submit"
          className="w-full text-base bg-black px-5 py-4 rounded-md text-white mt-4 hover:bg-gray-500 transition"
        >
          로그인
        </button>
        <Link
          to="/register"
          className="text-sm text-center mt-4 hover:underline transition"
        >
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default Login;
