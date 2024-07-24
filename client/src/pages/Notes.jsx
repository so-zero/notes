import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Tag from "../components/input/Tag";

const Notes = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(false);

  const handleAddNote = () => {};

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="w-10 h-10 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-gray-300"
      >
        <MdClose />
      </button>
      <div>
        <input
          type="text"
          className="w-full p-3 text-base outline-none"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="제목"
          required
        />
      </div>
      <div className="border">
        <textarea
          type="text"
          className="text-base outline-none p-3 w-full"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
          required
        />
      </div>
      <div className="mt-3">
        <label className="w-full text-xs text-gray-500">태그</label>
        <Tag tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button
        onClick={handleAddNote}
        className="mt-5 p-3 border w-full rounded-sm text-sm hover:bg-gray-300"
      >
        등록하기
      </button>
    </div>
  );
};

export default Notes;
