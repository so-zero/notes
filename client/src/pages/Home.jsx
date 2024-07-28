import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { MdPostAdd } from "react-icons/md";
import Modal from "react-modal";
import Notes from "./Notes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [openModal, setOpenModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login");
    } else {
      setUserInfo(currentUser?.rest);
      getPosts();
    }
  }, []);

  const getPosts = async () => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/post`;

    try {
      const response = await axios.get(URL, { withCredentials: true });

      setAllPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (postDetails) => {
    setOpenModal({ isShow: true, data: postDetails, type: "edit" });
  };

  const handleDelete = async (data) => {
    const postId = data._id;

    const URL = `${import.meta.env.VITE_BACKEND_URL}/post/deleteNote/${postId}`;

    try {
      const response = await axios.delete(URL, { withCredentials: true });

      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="px-6 py-2 md:px-10 md:py-4 lg:px-16 mx-auto">
        <h1 className="mt-3 text-base uppercase">
          {userInfo && userInfo.name}의 노트
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
          {allPosts.map((post) => (
            <NoteCard
              key={post._id}
              title={post.title}
              date={post.createdAt}
              content={post.content}
              tags={post.tags}
              isImportant={post.isImportant}
              onEdit={() => {
                handleEdit(post);
              }}
              onDelete={() => {
                handleDelete(post);
              }}
            />
          ))}
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
          postData={openModal.data}
          postType={openModal.type}
          getPosts={getPosts}
        />
      </Modal>
    </>
  );
};

export default Home;
