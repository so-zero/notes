import React from "react";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import { PiPencilLineFill, PiPencilSlashFill } from "react-icons/pi";

const NoteCard = ({ isImportant, handleClick, handleEdit, handleDelete }) => {
  return (
    <div className="border rounded p-4 hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-base font-semibold">test title</h3>
          <span className="text-xs text-gray-500">2024-07-23</span>
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
      <p className="text-xs text-gray-700 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis
        error quasi minus. Minus consequatur porro ipsum laboriosam recusandae
        reiciendis praesentium necessitatibus quae accusamus perferendis, odio
        consequuntur autem deserunt ipsa.
      </p>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-gray-500">#test</div>
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
