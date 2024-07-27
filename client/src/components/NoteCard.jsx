import React from "react";
import moment from "moment";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import { PiPencilLineFill, PiPencilSlashFill } from "react-icons/pi";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isImportant,
  handleClick,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="border rounded p-4 hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <span className="text-xs text-gray-500">
            {moment(date).format("YYYY년 MM월 DD일")}
          </span>
        </div>
        {isImportant ? (
          <RiPushpin2Fill onClick={handleClick} className="text-black" />
        ) : (
          <RiPushpin2Line
            onClick={handleClick}
            className="cursor-pointer text-gray-300 hover:text-black transition"
          />
        )}
      </div>
      <p className="text-sm text-gray-700 mt-3">{content?.slice(0, 60)}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-gray-500">
          {tags.map((tag) => `#${tag} `)}
        </div>
        <div className="flex items-center gap-2">
          <PiPencilLineFill
            onClick={handleEdit}
            className="cursor-pointer text-gray-500 hover:text-black transition"
          />
          <PiPencilSlashFill
            onClick={handleDelete}
            className="cursor-pointer text-gray-500 hover:text-red-500 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
