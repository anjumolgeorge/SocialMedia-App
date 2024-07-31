"use client";

import { useEffect, useState } from "react";
import instance from "../instence/instence";

export const SidebarRight: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState<{ [key: string]: boolean }>({});

  const getUser = async () => {
    try {
      const response = await instance.get("/user");
      setUsers(response.data);

      const storedFollowState = localStorage.getItem("followedUsers");
      if (storedFollowState) {
        setFollowedUsers(JSON.parse(storedFollowState));
      } else {
        const followStatus = response.data.reduce((acc: { [key: string]: boolean }, user: any) => {
          acc[user._id] = user.isFollowed;
          return acc;
        }, {});
        setFollowedUsers(followStatus);
        localStorage.setItem("followedUsers", JSON.stringify(followStatus));
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const toggleFollow = async (id: string) => {
    try {
      const userid = localStorage.getItem("userid");
      const isFollowed = followedUsers[id];

      const endpoint = isFollowed ? `/user/${id}/unfollow` : `/user/${id}/follow`;
      await instance.put(endpoint, { _id: userid });

      setFollowedUsers((prevState) => {
        const updatedFollowedUsers = {
          ...prevState,
          [id]: !isFollowed,
        };
        localStorage.setItem("followedUsers", JSON.stringify(updatedFollowedUsers));
        return updatedFollowedUsers;
      });
    } catch (error) {
      console.error("Error toggling follow state:", error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen w-[20rem] fixed right-0 top-0 bottom-0 p-6 shadow-lg">
      <div className="mt-10">
        <h1 className="text-white font-bold text-2xl mb-8">Suggestions</h1>
        <div className="w-full h-[690px] mt-5 mb-5 overflow-auto ">
          {users.map((user: any) => (
            <div
              key={user._id}
              className="flex items-center mb-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md"
            >
              <div
                className="h-14 w-14 rounded-full bg-cover bg-center mr-4"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')",
                }}
              ></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{user.username}</h3>
              </div>
              <button
                className={`ml-auto px-4 py-2 rounded-full font-semibold focus:outline-none transition-all transform ${
                  followedUsers[user._id]
                    ? 'bg-gray-500 text-white hover:bg-gray-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                onClick={() => toggleFollow(user._id)}
              >
                {followedUsers[user._id] ? "Unfollow" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;



// "use client";

// import { useEffect, useState } from "react";
// import instance from "../instence/instence";

// export const SidebarRight: React.FC = () => {
//   const [users, setUsers] = useState([]);
//   const [followedUsers, setFollowedUsers] = useState<{ [key: string]: boolean }>({});

//   const getUser = async () => {
//     try {
//       const response = await instance.get("/user");
//       setUsers(response.data);

//       const storedFollowState = localStorage.getItem("followedUsers");
//       if (storedFollowState) {
//         setFollowedUsers(JSON.parse(storedFollowState));
//       } else {
//         const followStatus = response.data.reduce((acc: { [key: string]: boolean }, user: any, index: number) => {
//           // Ensure the first four users start in the "Unfollow" state
//           acc[user._id] = index < 4 ? true : user.isFollowed;
//           return acc;
//         }, {});
//         setFollowedUsers(followStatus);
//         localStorage.setItem("followedUsers", JSON.stringify(followStatus));
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const toggleFollow = async (id: string) => {
//     try {
//       const userid = localStorage.getItem("userid");
//       const isFollowed = followedUsers[id];

//       const endpoint = isFollowed ? `/user/${id}/unfollow` : `/user/${id}/follow`;
//       await instance.put(endpoint, { _id: userid });

//       setFollowedUsers((prevState) => {
//         const updatedFollowedUsers = {
//           ...prevState,
//           [id]: !isFollowed,
//         };
//         localStorage.setItem("followedUsers", JSON.stringify(updatedFollowedUsers));
//         return updatedFollowedUsers;
//       });
//     } catch (error) {
//       console.error("Error toggling follow state:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 h-screen w-[20rem] fixed right-0 top-0 bottom-0 p-6 shadow-lg">
//       <div className="mt-10">
//         <h1 className="text-white font-bold text-2xl mb-8">Suggestions</h1>
//         <div className="w-full h-[690px] mt-5 mb-5 overflow-auto">
//           {users.map((user: any, index: number) => (
//             <div
//               key={user._id}
//               className="flex items-center mb-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md"
//             >
//               <div
//                 className="h-14 w-14 rounded-full bg-cover bg-center mr-4"
//                 style={{
//                   backgroundImage:
//                     "url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')",
//                 }}
//               ></div>
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-white">{user.username}</h3>
//               </div>
//               <button
//                 className={`ml-auto px-4 py-2 rounded-full font-semibold focus:outline-none transition-all transform ${
//                   followedUsers[user._id]
//                     ? 'bg-gray-500 text-white hover:bg-gray-600'
//                     : 'bg-blue-500 text-white hover:bg-blue-600'
//                 }`}
//                 onClick={() => toggleFollow(user._id)}
//               >
//                 {followedUsers[user._id] ? "Unfollow" : "Follow"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarRight;

