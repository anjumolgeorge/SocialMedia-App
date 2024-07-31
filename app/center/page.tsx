'use client';
import React, { useContext, useEffect, useState } from 'react';
import "./page.css";
import { GlobalContext } from '../components/context/globalcontext';
import instance from '../instence/instence';

const Center = () => {

 const [user,setUser] = useState('');
 const { post } = useContext<any>(GlobalContext);
 const postCount = post.length;
  const [followers, setFollowers] = useState<number | null>(null);
  const [following, setFollowing] = useState<number | null>(null);
  const [userid, setUserid] = useState<string | null>(null);

const userName = localStorage.getItem('username')


useEffect(() => {
  if (typeof window !== "undefined") {
    const id = localStorage.getItem("userid");
    setUserid(id);
  }
}, []);

useEffect(() => {
  if (userid) {
    const fetchUser = async () => {
      try {
        const response = await instance.get(`/user/${userid}`);
        const followersCount = response.data.followers.length;
        const followingsCount = response.data.following.length;
        console.log(followersCount, "followers");

        setFollowers(followersCount);
        setFollowing(followingsCount);
      } catch (error) {
        console.error("error");
      }
    };

    fetchUser();
  }
}, [userid ,post]);
  
  return (
    <div className='bg-black h-[74rem]'>
        <div className=' h-[25rem] w-[50rem] ml-[23rem]'>
        <div className=' flex'>
            <img className='rounded-full h-40 w-28 border border-white mt-16 ml-[10rem]' src="girl.avif" alt="" />
            <div className=' mt-28 ml-24 font-extrabold '>
                <h1 className='text-white font-mono'  style={{fontSize:"25px"}}>{userName}</h1>
                <br/>
                <div className='flex space-x-6 '>
                <h1 className='text-white font-normal'>Post<br/>{postCount}</h1>
                <h1 className='text-white flex font-normal'>Followers<br/>{followers}</h1>
                <h1 className='text-white flex font-normal'>Following<br/>{following}</h1>
                </div>
            </div>
            <div className=' mt-64 ml-[-29rem]'>
                <h1 className=' text-white'>American actress, filmmaker, and <br/> humanitarian. The recipient of  <br/> numerous accolades, including an  <br/> Academy Award and three <br/> Golden Globe Awards</h1>
            </div>
        </div>
      </div>
      <div className='border border-white flex text-white mt-6 w-[50rem] ml-[23rem]'>
         <h1 className=' ml-[13rem] font-bold text-1xl'>Post</h1>
         <h1 className='font-bold text-1xl ml-[20rem]'>Tag</h1>
       </div>
       <div className='bg-black w-[50rem] ml-[23rem] h-screen grid grid-cols-2 gap-4 p-4 mt-2 '>

       {/* <div className=" bg-white rounded-lg background-bike background-cover-center"></div>
       <div className=" bg-white rounded-lg background-emma background-cover-center"></div>
       <div className=" bg-white rounded-lg background-smith background-cover-center"></div>
       <div className=" bg-white rounded-lg background-angelina background-cover-center"></div>
       <div className=" bg-white rounded-lg background-bestcar background-cover-center"></div>
       <div className=" bg-white rounded-lg background-familiee background-cover-center"></div> */}

{post.map((item: any, index: any) => (
            <div
              key={index}
              className="relative w-full pt-[100%] bg-gray-800 rounded-lg"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0"></div>
            </div>
          ))}
</div>
    </div>
  );
}

export default Center;



