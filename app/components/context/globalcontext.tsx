// "use client";
// import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// type Post = {
//   id: number;
//   title: string;
//   content: string;
// };

// type GlobalContextType = {
//   post: Post[];
//   setPost: Dispatch<SetStateAction<Post[]>>;
// };

// export const GlobalContext = createContext<GlobalContextType | undefined>(
//   undefined
// );
// interface GlobalProviderProps {
//   children: ReactNode;
// }


// export default function GlobalProvider({ children }: GlobalProviderProps) {
//   const [post, setPost] = useState<Post[]>([]);
 
//   type PostId = string;

//   return (
//     <GlobalContext.Provider value={{ post, setPost }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }


"use client";

import instance from "@/app/instence/instence";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
// import toast from "react-hot-toast";

import { toast } from "react-toastify";


type Post = {
  id: number;
  title: string;
  content: string;
};

type GlobalContextType = {
  post: Post[];
  setPost: Dispatch<SetStateAction<Post[]>>;
  dlt: (postId: string) => void;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const [post, setPost] = useState<Post[]>([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getUser = async () => {
    try {
      const response = await instance.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  type PostId = string;



  const dlt = async (postId: string) => {
    const userd = localStorage.getItem("userid");
    const data = {
      userId: userd,
    };
    console.log(postId, "pooooooooooooo");

    try {
      const response = await instance.delete(`/posts/${postId}`, { data });
      if (response.status === 200) {
       alert("Post deleted");
        setPost((prevPosts: any[]) =>
          prevPosts.filter((post) => post._id !== postId)
        );
        handleClose();
      }
    } catch (error) {
      handleClose();
      alert("You can't delete another user's post");
      console.log("Error deleting post:", error);
    }
  };

  return (
    <GlobalContext.Provider value={{ post, setPost, dlt }}>
      {children}
    </GlobalContext.Provider>
  );
}