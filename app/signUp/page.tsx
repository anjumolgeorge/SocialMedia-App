'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import instance from '../instence/instence';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e:any) => {
    e.preventDefault();
    if (validate()) {
      instance.post("/auth/register", { username, email, password })
        .then(() => {
          toast.success('Form submitted');
          window.location.href = "/login";
        })
        .catch((error) => {
          console.error('There was an error!', error);
          toast.error('Registration failed');
        });
    }
  };

  const validate = () => {
    let result = true;
    if (!username) {
      result = false;
      toast.error('Please enter Username');
    }
    if (!email) {
      result = false;
      toast.error('Please enter your email');
    }
    if (!password) {
      result = false;
      toast.error('Please enter your Password');
    }
    return result;
  };

  return (
    <div className="bg-blue-950 h-screen overflow-hidden relative">
      <div className="text-blue-950">
        <div className="w-400 h-400 ml-32 mb-32">
          <img src="media.png" alt="Media" />
        </div>
        <div className="mt-8">
          <form onSubmit={handleClick}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold" style={{ marginTop: "-500px", marginLeft: "60rem" }}>User Name</label>
              <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e) => setUsername(e.target.value)} type="text" style={{ marginLeft: "60rem" }} />
            </div>
            <div>
              <label className="block text-white text-sm font-bold" style={{ marginTop: "-7px", marginLeft: "60rem" }}>Email</label>
              <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e) => setEmail(e.target.value)} type="email" style={{ marginLeft: "60rem" }} />
            </div>
            <div>
              <label className="block text-white text-sm font-bold" style={{ marginTop: "10px", marginLeft: "60rem" }}>Password</label>
              <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e) => setPassword(e.target.value)} type="password" style={{ marginLeft: "60rem" }} />
            </div>
            <button className="bg-green-800 mt-16 w-40 h-12 rounded-xl hover:bg-yellow-600" type="submit" style={{ marginLeft: "63rem", color: "white", boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }}>Sign Up</button>
          </form>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full" style={{ zIndex: -1 }} viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <h1 className="text-white mt-4 text-center ml-44">Already have an account?</h1>
      </div>
    </div>
  );
}

export default SignUp;



// 'use client'
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import instance from '../instence/instence';

// function SignUp() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleClick = (e:any) => {
//     e.preventDefault();
//     if (validate()) {
//       instance.post("/auth/register", { username, email, password })
//         .then(() => {
//           toast.success('Form submitted');
//           window.location.href = "/login";
//         })
//         .catch((error) => {
//           console.error('There was an error!', error);
//           toast.error('Registration failed');
//         });
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (!username) {
//       result = false;
//       toast.error('Please enter Username');
//     }
//     if (!email) {
//       result = false;
//       toast.error('Please enter your email');
//     }
//     if (!password) {
//       result = false;
//       toast.error('Please enter your Password');
//     }
//     return result;
//   };

//   return (
//     <div className="bg-blue-950 h-screen overflow-hidden relative">
//       <div className="text-blue-950 flex flex-col items-center">
//         <div className="w-32 h-32 md:w-40 md:h-40 mt-8 mb-8 md:ml-32 md:mb-32">
//           <img src="media.png" alt="Media" />
//         </div>
//         <div className="mt-8 md:mt-0">
//           <form onSubmit={handleClick}>
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2 md:mb-4 md:text-right md:mr-4 md:w-32" style={{ marginTop: "16px", marginLeft: "60rem" }}>User Name</label>
//               <input className="w-full max-w-xs px-4 py-3 border border-gray-100 rounded-md focus:outline-none md:w-450 md:ml-16" onChange={(e) => setUsername(e.target.value)} type="text" style={{ marginLeft: "60rem" }} />
//             </div>
//             <div>
//               <label className="block text-white text-sm font-bold mb-2 md:mb-4 md:text-right md:mr-4 md:w-32" style={{ marginTop: "16px", marginLeft: "60rem" }}>Email</label>
//               <input className="w-full max-w-xs px-4 py-3 border border-gray-100 rounded-md focus:outline-none md:w-450 md:ml-16" onChange={(e) => setEmail(e.target.value)} type="email" style={{ marginLeft: "60rem" }} />
//             </div>
//             <div>
//               <label className="block text-white text-sm font-bold mb-2 md:mb-4 md:text-right md:mr-4 md:w-32" style={{ marginTop: "16px", marginLeft: "60rem" }}>Password</label>
//               <input className="w-full max-w-xs px-4 py-3 border border-gray-100 rounded-md focus:outline-none md:w-450 md:ml-16" onChange={(e) => setPassword(e.target.value)} type="password" style={{ marginLeft: "60rem" }} />
//             </div>
//             <button className="bg-green-800 mt-16 w-full max-w-xs py-3 rounded-xl hover:bg-yellow-600 text-white shadow-lg md:w-40 md:ml-16" type="submit" style={{ marginLeft: "63rem", boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }}>Sign Up</button>
//           </form>
//         </div>
//         <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full" style={{ zIndex: -1 }} viewBox="0 0 1440 320">
//           <path fill="#0099ff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//         <h1 className="text-white mt-4 text-center md:ml-44">Already have an account?</h1>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
