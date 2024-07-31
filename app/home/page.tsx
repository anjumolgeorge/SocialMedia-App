// 'use client';
// import React, { useState, useRef, useContext, useEffect } from 'react';
// import './page.css';
// import { GiSelfLove } from 'react-icons/gi';
// import { FaCommentDots } from 'react-icons/fa';
// import CreatePost from '../components/createPost';
// import SidebarLeft from '../sidebarLeft/page';
// import HoverButton from '../button/page';
// import instance from '../instence/instence';
// import { GlobalContext } from '../components/context/globalcontext';
// import SidebarRight from '../sidebarRight/page';
// import Delete from '../components/postDelete';

// interface Post {
//   _id: string;
//   image: string;
//   likes?: string[];
//   comments?: Comment[];
// }

// interface Comment {
//   userProfileImage: string;
//   text: string;
// }

// function Home() {
//   const { post, setPost } = useContext<any>(GlobalContext);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [selectFile, setSelectFile] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string[]>([]);
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//   const [likedPosts, setLikedPosts] = useState<any>({});
//   const [commentSection, setCommentSection] = useState<any>({});
//   const [userName, setUserName] = useState('');
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const storedUserName = localStorage.getItem('username');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await instance.get('/posts');
//         setPost(response.data.posts);

//         const storedLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
//         const initialLikes = response.data.posts.reduce((acc: any, post: any) => {
//           acc[post._id] = storedLikedPosts[post._id] || false;
//           return acc;
//         }, {});
//         setLikedPosts(initialLikes);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };
//     fetchPosts();
//   }, [setPost]);

//   const handleUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputFile = e.target.files ? e.target.files[0] : null;
//     setSelectFile(inputFile);
//   };

//   const handleSubmit = async (description: string) => {
//     if (selectFile) {
//       const formData = new FormData();
//       formData.append('file', selectFile);
//       formData.append('desc', description);
//       formData.append('userId', '663c610c0fe5ec8be36a53fe');

//       try {
//         const response = await instance.post('/createPost', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         setImageUrl((prev) => [...prev, response.data.post.image]);
//       } catch (error) {
//         console.error('Error creating post:', error);
//       }
//     }
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e: any) => {
//     setInputValue(e.target.value);
//   };

//   const fetchComment = async (id: any) => {
//     const usernteid = localStorage.getItem('userid');
//     const datas = {
//       userId: usernteid,
//       text: inputValue,
//     };
//     try {
//       const response = await instance.post(`/posts/${id}/comment`, datas);
//       if (response.status === 200) {
//         const updatedPosts = post.map((item: Post) => {
//           if (item._id === id) {
//             return {
//               ...item,
//               comments: response.data.comments,
//             };
//           }
//           return item;
//         });

//         setPost(updatedPosts);
//         setInputValue('');
//         alert('Commented successfully');
//       }
//     } catch (error) {
//       console.error(error);
//       setInputValue('');
//       alert('write your opinion');
//     }
//   };

//   const toggleCommentSection = (postId: string) => {
//     setCommentSection((prev:any) => ({ ...prev, [postId]: !prev[postId] }));
//   };

//   const fetchLike = async (id: any) => {
//     const usernteid =
//       typeof localStorage !== "undefined"
//         ? localStorage.getItem("userid")
//         : null;
//     const datas = {
//       userId: usernteid,
//     };
//     try {
//       const response = await instance.put(`/posts/${id}/like`, { ...datas });
//       if (response.status === 200) {

//         const updatedLikes = post.map((item: any) => {
          
//           if (item._id === id) {
//             return {
//               ...item,
//               likes: response.data.likes,
//             };
//           }
//           return item;
//         });
//         setPost(updatedLikes);
        
//         const newLikedPosts = { ...likedPosts, [id]: !likedPosts[id] };
//         setLikedPosts(newLikedPosts);
//         localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));
//       }
//     } catch (error) {
//       alert("something error");
//       console.error("error like : ", error);
//     }
//   };

//   return (
//     <div className='flex bg-black min-h-screen ml-80'>
//       <SidebarLeft />
//       <div className='flex flex-col items-center w-full overflow-auto'>
//         <HoverButton onClick={handleOpen} className='mt-8 ' />
//         <CreatePost
//           open={open}
//           handleClose={handleClose}
//           fileInputRef={fileInputRef}
//           handleUpload={handleUpload}
//           handleFile={handleFile}
//           handleSubmit={handleSubmit}
//           setImageUrl={setImageUrl}
//         />
//         <div className='flex flex-col items-center max-w-4xl mt-11 mr-80'>
//           {post?.map((url: Post, index: number) => (
//             <div
//               key={url._id}
//               className='relative mt-4 border border-gray-800 rounded-lg shadow-lg w-full bg-gray-900 p-4'
//             >
//               <div className='flex items-center'>
//                 <img
//                   className='h-10 w-10 rounded-full border border-white'
//                   src={url?.image}
//                   alt='Profile'
//                 />
//                 <h1 className='text-white ml-4'>{userName}</h1>
//               </div>
//               <div className='flex justify-center my-4'>
//                 <img
//                   src={url?.image}
//                   alt={`Uploaded ${index}`}
//                   className='max-h-96 rounded-md'
//                 />
//               </div>
//               <div className='flex items-center justify-between'>
//                 <div className='flex items-center'>
//                   <GiSelfLove
//                     onClick={() => fetchLike(url._id)}
//                     className={`w-7 h-7 cursor-pointer ${
//                       likedPosts[url._id] ? 'text-red-500' : 'text-gray-500'
//                     }`}
//                     aria-label='Like'
//                   />
//                   <h1>{url?.likes?.length}</h1>
//                   <FaCommentDots
//                     onClick={() => toggleCommentSection(url._id)}
//                     className='w-7 h-7 ml-6 text-gray-500 cursor-pointer'
//                     aria-label='Comment'
//                   />
//                 </div>
//               </div>
//               <Delete itemId={url._id} />

//               <p className='text-sm text-gray-700'>{url?.desc}</p>

//               {commentSection[url._id] && (
//                 <div className='mt-4'>
//                   {url?.comments?.map((comment: Comment, idx: number) => (
//                     <div key={idx} className='flex items-center space-x-2 mb-2'>
//                       <img
//                         className='h-6 w-6 rounded-full border border-white'
//                         src={url?.image}
//                         alt='Profile'
//                       />
//                       <p className='text-sm text-gray-300'>{comment.text}</p>
//                     </div>
//                   ))}
//                   <div className='flex items-center mt-2'>
//                     <input
//                       type='text'
//                       value={inputValue}
//                       onChange={handleChange}
//                       className='border border-gray-300 rounded-lg p-2 w-full text-blue-950'
//                       placeholder='Add a comment...'
//                     />
//                     <button
//                       onClick={() => fetchComment(url._id)}
//                       className='ml-2 bg-blue-500 text-white p-2 rounded-lg'
//                     >
//                       Post
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SidebarRight />
//     </div>
//   );
// }

// export default Home;

// 'use client'

// import React, { useState, useRef, useContext, useEffect } from 'react';
// import { GiSelfLove } from 'react-icons/gi';
// import { FaCommentDots } from 'react-icons/fa';
// import CreatePost from '../components/createPost';
// import SidebarLeft from '../sidebarLeft/page';
// import HoverButton from '../button/page';
// import instance from '../instence/instence';
// import { GlobalContext } from '../components/context/globalcontext';
// import SidebarRight from '../sidebarRight/page';
// import Delete from '../components/postDelete';

// interface Post {
//   _id: string;
//   image: string;
//   likes?: string[];
//   comments?: Comment[];
// }

// interface Comment {
//   userProfileImage: string;
//   text: string;
// }

// function Home() {
//   const { post, setPost } = useContext<any>(GlobalContext);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [selectFile, setSelectFile] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string[]>([]);
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//   const [likedPosts, setLikedPosts] = useState<any>({});
//   const [commentSection, setCommentSection] = useState<any>({});
//   const [userName, setUserName] = useState('');
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const storedUserName = localStorage.getItem('username');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await instance.get('/posts');
//         setPost(response.data.posts);

//         const storedLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
//         const initialLikes = response.data.posts.reduce((acc: any, post: any) => {
//           acc[post._id] = storedLikedPosts[post._id] || false;
//           return acc;
//         }, {});
//         setLikedPosts(initialLikes);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };
//     fetchPosts();
//   }, [setPost]);

//   const handleUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputFile = e.target.files ? e.target.files[0] : null;
//     setSelectFile(inputFile);
//   };

//   const handleSubmit = async (description: string) => {
//     if (selectFile) {
//       const formData = new FormData();
//       formData.append('file', selectFile);
//       formData.append('desc', description);
//       formData.append('userId', '663c610c0fe5ec8be36a53fe');

//       try {
//         const response = await instance.post('/createPost', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         setImageUrl((prev) => [...prev, response.data.post.image]);
//       } catch (error) {
//         console.error('Error creating post:', error);
//       }
//     }
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e: any) => {
//     setInputValue(e.target.value);
//   };

//   const fetchComment = async (id: any) => {
//     const usernteid = localStorage.getItem('userid');
//     const datas = {
//       userId: usernteid,
//       text: inputValue,
//     };
//     try {
//       const response = await instance.post(`/posts/${id}/comment`, datas);
//       if (response.status === 200) {
//         const updatedPosts = post.map((item: Post) => {
//           if (item._id === id) {
//             return {
//               ...item,
//               comments: response.data.comments,
//             };
//           }
//           return item;
//         });

//         setPost(updatedPosts);
//         setInputValue('');
//         alert('Commented successfully');
//       }
//     } catch (error) {
//       console.error(error);
//       setInputValue('');
//       alert('write your opinion');
//     }
//   };

//   const toggleCommentSection = (postId: string) => {
//     setCommentSection((prev: any) => ({ ...prev, [postId]: !prev[postId] }));
//   };

//   const fetchLike = async (id: any) => {
//     const usernteid = localStorage.getItem('userid');
//     const datas = {
//       userId: usernteid,
//     };
//     try {
//       const response = await instance.put(`/posts/${id}/like`, { ...datas });
//       if (response.status === 200) {
//         const updatedLikes = post.map((item: any) => {
//           if (item._id === id) {
//             return {
//               ...item,
//               likes: response.data.likes,
//             };
//           }
//           return item;
//         });
//         setPost(updatedLikes);

//         const newLikedPosts = { ...likedPosts, [id]: !likedPosts[id] };
//         setLikedPosts(newLikedPosts);
//         localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));
//       }
//     } catch (error) {
//       alert('something error');
//       console.error('error like : ', error);
//     }
//   };

//   return (
//     <div className='flex bg-black min-h-screen ml-80'>
//       <SidebarLeft />
//       <div className='flex flex-col items-center w-full overflow-auto'>
//         <HoverButton onClick={handleOpen} className='mt-8 ' />
//         <CreatePost
//           open={open}
//           handleClose={handleClose}
//           fileInputRef={fileInputRef}
//           handleUpload={handleUpload}
//           handleFile={handleFile}
//           handleSubmit={handleSubmit}
//           setImageUrl={setImageUrl}
//         />
//         <div className='flex flex-col items-center max-w-4xl mt-11 mr-80'>
//           {post?.map((url: Post, index: number) => (
//             <div
//               key={url._id}
//               className='relative mt-4 border border-gray-800 rounded-lg shadow-lg w-full bg-gray-900 p-4'
//             >
//               <div className='flex items-center'>
//                 <img
//                   className='h-10 w-10 rounded-full border border-white'
//                   src={url?.image}
//                   alt='Profile'
//                 />
//                 <h1 className='text-white ml-4'>{userName}</h1>
//               </div>
//               <div className='flex justify-center my-4'>
//                 <img
//                   src={url?.image}
//                   alt={`Uploaded ${index}`}
//                   className='max-h-96 rounded-md'
//                 />
//               </div>
//               <div className='flex items-center justify-between'>
//                 <div className='flex items-center'>
//                   <GiSelfLove
//                     onClick={() => fetchLike(url._id)}
//                     className={`w-7 h-7 cursor-pointer transform transition-transform duration-200 ${
//                       likedPosts[url._id] ? 'text-red-500 scale-125' : 'text-gray-500'
//                     } hover:scale-125`}
//                     aria-label='Like'
//                   />
//                   <h1 className='text-white ml-2'>{url?.likes?.length}</h1>
//                   <FaCommentDots
//                     onClick={() => toggleCommentSection(url._id)}
//                     className='w-7 h-7 ml-6 text-gray-500 cursor-pointer transform transition-transform duration-200 hover:scale-125 hover:text-blue-500'
//                     aria-label='Comment'
//                   />
//                 </div>
//               </div>
//               <Delete itemId={url._id} />

//               <p className='text-sm text-gray-700'>{url?.desc}</p>

//               {commentSection[url._id] && (
//                 <div className='mt-4'>
//                   {url?.comments?.map((comment: Comment, idx: number) => (
//                     <div key={idx} className='flex items-center space-x-2 mb-2'>
//                       <img
//                         className='h-6 w-6 rounded-full border border-white'
//                         src={url?.image}
//                         alt='Profile'
//                       />
//                       <p className='text-sm text-gray-300'>{comment.text}</p>
//                     </div>
//                   ))}
//                   <div className='flex items-center mt-2'>
//                     <input
//                       type='text'
//                       value={inputValue}
//                       onChange={handleChange}
//                       className='border border-gray-300 rounded-lg p-2 w-full text-blue-950'
//                       placeholder='Add a comment...'
//                     />
//                     <button
//                       onClick={() => fetchComment(url._id)}
//                       className='ml-2 bg-blue-500 text-white p-2 rounded-lg'
//                     >
//                       Post
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SidebarRight />
//     </div>
//   );
// }

// export default Home;




'use client'

import React, { useState, useRef, useContext, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import CreatePost from '../components/createPost';
import SidebarLeft from '../sidebarLeft/page';
import HoverButton from '../button/page';
import instance from '../instence/instence';
import { GlobalContext } from '../components/context/globalcontext';
import SidebarRight from '../sidebarRight/page';
import Delete from '../components/postDelete';

interface Post {
  _id: string;
  image: string;
  likes?: string[];
  comments?: Comment[];
}

interface Comment {
  userProfileImage: string;
  text: string;
}

function Home() {
  const { post, setPost } = useContext<any>(GlobalContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<any>({});
  const [commentSection, setCommentSection] = useState<any>({});
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await instance.get('/posts');
        setPost(response.data.posts);

        const storedLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
        const initialLikes = response.data.posts.reduce((acc: any, post: any) => {
          acc[post._id] = storedLikedPosts[post._id] || false;
          return acc;
        }, {});
        setLikedPosts(initialLikes);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [setPost]);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files ? e.target.files[0] : null;
    setSelectFile(inputFile);
  };

  const handleSubmit = async (description: string) => {
    if (selectFile) {
      const formData = new FormData();
      formData.append('file', selectFile);
      formData.append('desc', description);
      formData.append('userId', '663c610c0fe5ec8be36a53fe');

      try {
        const response = await instance.post('/createPost', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setImageUrl((prev) => [...prev, response.data.post.image]);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const fetchComment = async (id: any) => {
    const usernteid = localStorage.getItem('userid');
    const datas = {
      userId: usernteid,
      text: inputValue,
    };
    try {
      const response = await instance.post(`/posts/${id}/comment`, datas);
      if (response.status === 200) {
        const updatedPosts = post.map((item: Post) => {
          if (item._id === id) {
            return {
              ...item,
              comments: response.data.comments,
            };
          }
          return item;
        });

        setPost(updatedPosts);
        setInputValue('');
        alert('Commented successfully');
      }
    } catch (error) {
      console.error(error);
      setInputValue('');
      alert('write your opinion');
    }
  };

  const toggleCommentSection = (postId: string) => {
    setCommentSection((prev: any) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const fetchLike = async (id: any) => {
    const usernteid = localStorage.getItem('userid');
    const datas = {
      userId: usernteid,
    };
    try {
      const response = await instance.put(`/posts/${id}/like`, { ...datas });
      if (response.status === 200) {
        const updatedLikes = post.map((item: any) => {
          if (item._id === id) {
            return {
              ...item,
              likes: response.data.likes,
            };
          }
          return item;
        });
        setPost(updatedLikes);

        const newLikedPosts = { ...likedPosts, [id]: !likedPosts[id] };
        setLikedPosts(newLikedPosts);
        localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));
      }
    } catch (error) {
      alert('something error');
      console.error('error like : ', error);
    }
  };

  return (
    <div className='flex bg-black min-h-screen ml-80'>
      <SidebarLeft />
      <div className='flex flex-col items-center w-full overflow-auto'>
        <HoverButton onClick={handleOpen} className='mt-8 ' />
        <CreatePost
          open={open}
          handleClose={handleClose}
          fileInputRef={fileInputRef}
          handleUpload={handleUpload}
          handleFile={handleFile}
          handleSubmit={handleSubmit}
          setImageUrl={setImageUrl}
        />
        <div className='flex flex-col items-center max-w-4xl mt-11 mr-80'>
          {post?.map((url: Post, index: number) => (
            <div
              key={url._id}
              className='relative mt-4 border border-gray-800 rounded-lg shadow-lg w-full bg-gray-900 p-4'
            >
              <div className='flex items-center'>
                <img
                  className='h-10 w-10 rounded-full border border-white'
                  src={url?.image}
                  alt='Profile'
                />
                <h1 className='text-white ml-4'>{userName}</h1>
              </div>
              <div className='flex justify-center my-4'>
                <img
                  src={url?.image}
                  alt={`Uploaded ${index}`}
                  className='max-h-96 rounded-md'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  {likedPosts[url._id] ? (
                    <AiFillHeart
                      onClick={() => fetchLike(url._id)}
                      className='w-7 h-7 text-red-500 cursor-pointer transform transition-transform duration-200 hover:scale-125'
                      aria-label='Unlike'
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() => fetchLike(url._id)}
                      className='w-7 h-7 text-gray-500 cursor-pointer transform transition-transform duration-200 hover:scale-125 hover:text-red-500'
                      aria-label='Like'
                    />
                  )}
                  <h1 className='text-white ml-2'>{url?.likes?.length}</h1>
                  <FaRegCommentDots
                    onClick={() => toggleCommentSection(url._id)}
                    className='w-7 h-7 ml-6 text-gray-500 cursor-pointer transform transition-transform duration-200 hover:scale-125 hover:text-blue-500'
                    aria-label='Comment'
                  />
                </div>
              </div>
              <Delete itemId={url._id} />

              <p className='text-sm text-gray-300'>{url?.desc}</p>

              {commentSection[url._id] && (
                <div className='mt-4'>
                  {url?.comments?.map((comment: Comment, idx: number) => (
                    <div key={idx} className='flex items-center space-x-2 mb-2'>
                      <img
                        className='h-6 w-6 rounded-full border border-white'
                        src={url?.image}
                        alt='Profile'
                      />
                      <p className='text-sm text-gray-300'>{comment.text}</p>
                    </div>
                  ))}
                  <div className='flex items-center mt-2'>
                    <input
                      type='text'
                      value={inputValue}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg p-2 w-full text-black'
                      placeholder='Add a comment...'
                    />
                    <button
                      onClick={() => fetchComment(url._id)}
                      className='ml-2 bg-blue-500 text-white p-2 rounded-lg'
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <SidebarRight />
    </div>
  );
}

export default Home;
