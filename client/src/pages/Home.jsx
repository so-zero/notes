import React, { useState } from "react";
import NoteCard from "../components/NoteCard";
import { MdPostAdd } from "react-icons/md";
import Modal from "react-modal";
import Notes from "./Notes";

const Home = () => {
  const [openModal, setOpenModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className="px-6 py-2 md:px-10 md:py-4 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 ">
          <NoteCard />
        </div>
      </div>
      <button className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex justify-center items-center rounded-xl bg-black absolute right-10 bottom-10">
        <MdPostAdd
          onClick={() => {
            setOpenModal({ isShow: true, type: "add", data: null });
          }}
          className="text-white text-[26px] md:text-[32px]"
        />
      </button>
      <Modal
        isOpen={openModal.isShow}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-sm:w-[70%] max-md:w-[60%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <Notes
          onClose={() => {
            setOpenModal({ isShow: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
