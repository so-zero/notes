import React, { useState } from "react";
import { IoLockOpen, IoLockClosed } from "react-icons/io5";

const Password = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center bg-transparent border px-5 rounded-md mb-4">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="비밀번호"
        required
        className="w-full text-base bg-transparent mr-3 py-4 outline-none"
      />

      {showPassword ? (
        <IoLockOpen
          size={22}
          onClick={() => togglePassword()}
          className="cursor-pointer text-black"
        />
      ) : (
        <IoLockClosed
          size={22}
          onClick={() => togglePassword()}
          className="cursor-pointer text-black"
        />
      )}
    </div>
  );
};

export default Password;
