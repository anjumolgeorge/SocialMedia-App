// 'use client'
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import instance from '../instence/instence';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     try {
//       const response = await instance.post('/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);

//       const userResponse = await instance.get('/user/');
//       const user = userResponse.data.find((value:any) => value.email === email);

//       if (user) {
//         localStorage.setItem("userid", user._id);
//         localStorage.setItem("username", user.username);
//         localStorage.setItem("email", user.email);
//       }

//       toast.success('Login successful');
//       window.location.href = '/home';
//     } catch (error) {
//       console.error('There was an error!', error);
//       toast.error('Please enter valid credentials');
//     }
//   };

//   return (
//     <div className="bg-blue-950 h-screen overflow-hidden relative flex justify-center items-center">
//       <div className="text-blue-950">
//         <div className="w-400 h-390 ml-32 mb-32">
//           <img src="picture.png" alt="Picture" />
//         </div>
//         <div className="mt-24 flex flex-col items-center">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 flex items-center">
//               <label className="block text-white text-sm font-bold mt-0">Email</label>
//               <input className="w-450 px-4 py-3 ml-4 border border-gray-100 rounded-md focus:outline-none" onChange={(e) => setEmail(e.target.value)} type="email" style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }} />
//             </div>
//             <div className="flex items-center">
//               <label className="block text-white text-sm font-bold mt-0">Password</label>
//               <input className="w-450 px-4 py-3 ml-4 border border-gray-100 rounded-md focus:outline-none" onChange={(e) => setPassword(e.target.value)} type="password" style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }} />
//             </div>
//             <button className="bg-green-800 mt-6 w-40 h-10 rounded-xl hover:bg-yellow-600 text-white shadow-md" type='submit'>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// 'use client'
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import instance from '../instence/instence';
// import Link from 'next/link';
// import Loader from '../components/loading';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await instance.post('/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);

//       const userResponse = await instance.get('/user/');
//       const user = userResponse.data.find((value: any) => value.email === email);

//       if (user) {
//         localStorage.setItem("userid", user._id);
//         localStorage.setItem("username", user.username);
//         localStorage.setItem("email", user.email);
//       }

//       toast.success('Login successful');
//       window.location.href = '/home'; // Redirect to home page
//     } catch (error) {
//       console.error('There was an error!', error);
//       toast.error('Please enter valid credentials');
//     }
//   };


//   return (
//     <div className="bg-blue-950 h-screen overflow-hidden relative flex flex-col justify-center items-center">
//       <div className="text-blue-950">
//         <div className="w-400 h-390 mb-12">
//           <img src="picture.png" alt="Picture" />
//         </div>
//         <div className="mt-6 flex flex-col items-center">
//           <form onSubmit={handleSubmit} className="w-full max-w-sm">
//             <div className="mb-4 flex flex-col">
//               <label className="block text-white text-sm font-bold mb-1">Email</label>
//               <input
//                 className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none"
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 placeholder="Enter your email"
//                 style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }}
//               />
//             </div>
//             <div className="mb-6 flex flex-col">
//               <label className="block text-white text-sm font-bold mb-1">Password</label>
//               <input
//                 className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none"
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Enter your password"
//                 style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }}
//               />
//             </div>
//             <button
//               className="bg-green-800 w-full h-10 rounded-xl hover:bg-yellow-600 text-white shadow-md mb-4"
//               type="submit"
//             >
//               Login
//             </button>
//             <Loader/>
//             <Link href='./signUp'>
//             <button
//               className="bg-blue-700 w-full h-10 rounded-xl hover:bg-blue-600 text-white shadow-md"
//               type="button"
//             >
//               Sign Up
//             </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import instance from '../instence/instence';
import Loader from '../components/loading'; 
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await instance.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);

      const userResponse = await instance.get('/user/');
      const user = userResponse.data.find((value: any) => value.email === email);

      if (user) {
        localStorage.setItem("userid", user._id);
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
      }

      toast.success('Login successful');
      setTimeout(() => {
        window.location.href = '/home';
      },1000); 
    } catch (error) {
      console.error('There was an error!', error);
      toast.error('Please enter valid credentials');
      setLoading(false); 
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-blue-950 h-screen overflow-hidden relative flex flex-col justify-center items-center">
      <div className="text-blue-950">
        <div className="w-400 h-390 mb-12">
          <img src="picture.png" alt="Picture" />
        </div>
        <div className="mt-6 flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4 flex flex-col">
              <label className="block text-white text-sm font-bold mb-1">Email</label>
              <input
                className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="block text-white text-sm font-bold mb-1">Password</label>
              <input
                className="w-full px-4 py-3 border border-gray-100 rounded-md focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }}
              />
            </div>
            <button
              className="bg-green-800 w-full h-10 rounded-xl hover:bg-yellow-600 text-white shadow-md mb-4"
              type="submit"
            >
              Login
            </button>
            <Link href='./signUp'>
              <button
                className="bg-blue-700 w-full h-10 rounded-xl hover:bg-blue-600 text-white shadow-md"
                type="button"
              >
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
