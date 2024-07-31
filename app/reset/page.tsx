// import React from 'react';
// import { FaArrowLeft } from "react-icons/fa6";

// function NavBar() {
//   return (
//     <div>
//       <div  style={{ background: " #868f96", height: "729px", display:'flex', justifyContent:'center', alignItems:'center'  }}>
//      <h1 style={{marginBottom:"30rem",fontSize:"2rem",color:"white",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>Reset your Password</h1>
//         <div style={{ background: " #485563", width: "60rem", height: "20rem",marginLeft : "2rem" , justifyContent : "center",borderRadius:"20px",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>
//             <h1 className="pt-20 pl-20 text-white">"Oops! It seems you've forgotten your password. Don't worry, we've got you covered.<br/>
//  Please follow the instructions below to reset your password and regain access to your account."</h1>
//  <br/>
//  <br/>
// <input type="text" id="fullName" className=" ml-48 w-96 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter  Email"/>

// <button style={{background:"brown",width:"5rem",height:"2rem", marginTop:"2rem",marginLeft:"33rem",color:"white",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>Verify</button>
// <FaArrowLeft className='mt-[-28rem] ml-[-20rem]'/>

//     </div>
        
//   </div>
// </div>
//   );
// }

// export default NavBar;

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function ResetPassword() {
  return (
    <div className="bg-blue-950 h-screen overflow-hidden relative flex justify-center items-center">
      <div className="text-blue-950">
        <h1 className="text-white text-3xl mb-16">Reset your Password</h1>

        <div className="bg-gray-400 w-96 h-96 rounded-3xl shadow-lg p-8">
          <h1 className="text-black text-lg mb-8 text-justify">
            "Oops! It seems you've forgotten your password. Don't worry, we've got you covered. <br />
            Please follow the instructions below to reset your password and regain access to your account."
          </h1>

          <input
            type="text"
            id="email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter Email"
          />

          <button className="bg-green-800 w-full h-12 rounded-xl text-white shadow-md hover:bg-yellow-600">
            Verify
          </button>
        </div>

        <FaArrowLeft className="absolute top-10 left-10 text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default ResetPassword;
