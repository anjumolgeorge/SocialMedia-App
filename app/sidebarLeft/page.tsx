// import React from 'react';
// import { HiHomeModern } from "react-icons/hi2";
// import { MdOutlineVideoStable } from "react-icons/md";
// import { SlLike } from "react-icons/sl";
// import { IoMdMusicalNote } from "react-icons/io";
// import { PiFilmStrip } from "react-icons/pi";
// import { MdLiveTv } from "react-icons/md";
// import { RiProfileFill } from "react-icons/ri";
// import Link from 'next/link';
// import { IoSettings } from 'react-icons/io5';
// import { FaExchangeAlt } from "react-icons/fa";
// import { HiLogout } from "react-icons/hi";
// import ChangePassword from '../changePassword/page';

// function SidebarLeft() {
//   return (
//     <div>
        
//             <div className='bg-gray-900 w-[20rem] h-screen flex flex-col justify-center items-center' style={{ position: "fixed", left: 0, top: 0, bottom: 0 }}>
//              <div>
//               <h1
//           className=" text-white ml-[-50px] text-5xl mt-6"
//           style={{
//             textShadow: "0 12px 5px rgba(0,0,0,0.2)",
//             fontFamily: "fantasy",
//           }}
//         >
//           <span style={{ color: "white" }}>Swift</span>
//           <span style={{ color: "#3CAB90" }}>Site</span>
//         </h1>
//              </div>
//        <div className='text-white font-medium size-full text-lg ml-28'>
//           <br/><br/><br/><br/><br/>
//           <br/>
          
//             <div className='flex items-center'>
//             <RiProfileFill />
//             <Link href='/profile'>
//               <h1 className='ml-3'>Profile</h1>
//               </Link>
//             </div>
//             <br/>
//           <div className='flex items-center'>
//             <HiHomeModern />
//             <h1 className='ml-3'>Home</h1>
//           </div>
//           <br/>
//           <div className='flex items-center'>
//             <MdOutlineVideoStable />
//             <h1 className='ml-3'>Your Posts</h1>
//           </div>
          
//           <br/>
//           <div className='flex items-center'>
//             <MdLiveTv />
//             <h1 className='ml-3'>Live</h1>
//           </div>
//           <br/>
//           <div className='flex items-center'>
//               <IoSettings />
//               <h1 className='ml-3'>Settings</h1>
//             </div>
//             <br/>
//             <br/>
//             <br/>
//             <div className='flex items-center'>
//             <FaExchangeAlt />
//             </div>
//             <ChangePassword/>
//             <br/>
//             <br/>
           
//             <Link href="./login">
//             <div className='flex items-center'>
//             <HiLogout />
//               <h1 className='ml-3'>LogOut</h1>
//             </div>
//             </Link>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default SidebarLeft;




import React from 'react';
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineVideoStable, MdLiveTv } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import Link from 'next/link';
import { IoSettings } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import ChangePassword from '../changePassword/page';

function SidebarLeft() {
  return (
    <div className="bg-gray-900 h-screen fixed left-0 top-0 bottom-0 flex flex-col justify-start items-start p-6 md:w-[20rem] w-[16rem] sm:w-[14rem]">
      <div className="text-center mb-8">
        <h1
          className="text-white text-3xl md:text-5xl"
          style={{
            textShadow: "0 12px 5px rgba(0,0,0,0.2)",
            fontFamily: "fantasy",
          }}
        >
          <span style={{ color: "white" }}>Swift</span>
          <span style={{ color: "#3CAB90" }}>Site</span>
        </h1>
      </div>
      <div className="text-white font-medium text-sm md:text-lg w-full">
        <div className="flex items-center mb-4">
          <RiProfileFill className="text-2xl" />
          <Link href='/profile'>
            <h1 className='ml-3'>Profile</h1>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <HiHomeModern className="text-2xl" />
          <Link href='/'>
            <h1 className='ml-3'>Home</h1>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <MdOutlineVideoStable className="text-2xl" />
          <h1 className='ml-3'>Your Posts</h1>
        </div>
        <div className="flex items-center mb-4">
          <MdLiveTv className="text-2xl" />
          <h1 className='ml-3'>Live</h1>
        </div>
        <div className="flex items-center mb-4">
          <IoSettings className="text-2xl" />
          <h1 className='ml-3'>Settings</h1>
        </div>
        <div className="flex items-center mb-4">
          <FaExchangeAlt className="text-2xl" />
        </div>
        <ChangePassword />
        <div className="flex items-center mt-8">
          <Link href="./login">
            <div className="flex items-center">
              <HiLogout className="text-2xl" />
              <h1 className='ml-3'>LogOut</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;


