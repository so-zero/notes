import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../components/input/Password";
import { MdEventNote } from "react-icons/md";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-20 flex flex-col max-w-screen-sm mx-auto min-h-[500px]">
      <MdEventNote size={60} className="mx-auto" />
      <form
        className="flex flex-col gap-1 mt-10 px-10"
        onSubmit={handleRegister}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
          className="w-full text-base bg-transparent border px-5 py-4 rounded-md mb-4 outline-none"
        />
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
          회원가입
        </button>
        <Link
          to="/login"
          className="text-sm text-center mt-4 hover:underline transition"
        >
          로그인
        </Link>
      </form>
    </div>
  );
};

export default Register;
