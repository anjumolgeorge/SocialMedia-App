import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-900 h-screen overflow-hidden relative">
      <div className="text-blue-950">
        <h1
          className="text-6xl"
          style={{
            textShadow: "0 12px 5px rgba(0,0,0,0.2)",
            fontFamily: "fantasy",
            height: "20rem",
            marginLeft: "20px",
            marginTop: "3px",
          }}
        >
          <span style={{ color: "white" }}>Swift</span>
          <span style={{ color: "#3CAB90" }}>Site</span>
        </h1>
        <h2
          className=" text-6xl text-white"
          style={{
            marginTop: "-120px",
            marginLeft: "10rem",
            fontFamily:"initial",
          }}
        >
          Welcome to SwiftSite,
        </h2>
        <h2
          className="text-4xl" 
          style={{  color:"white",fontFamily:"cursive", marginLeft: "10rem" }}
        >
          <br/>
          where every click
          <br />
          opens a door to possibility.
        </h2>
        <br />
        <h2
          className="text-5xl font-medium text-blue-950"
          style={{
            textShadow: "0 12px 5px rgba(0,0,0,0.2)",
            margin: "20px",
            marginLeft: "15rem",
            fontFamily: "serif",
            color: "#3CAB90" ,
          }}
        >
          Let's explore together
        </h2>
        <img
          style={{
            marginLeft: "45rem",
            marginTop: "-400px",
            width: "800px",
          }}
          src="connection.png"
          alt=""
        />
        <div style={{ marginTop: "-170px", marginLeft: "200px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[-13rem] absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <foreignObject x="0" y="0" width="1440" height="320">
              <div className="flex justify-center items-center h-full">
                <Link href="/login">
                  <button
                    className="text-1xl mx-4 hover:shadow-md hover:bg-green-600 hover:text-white"
                    style={{
                      boxShadow: "0 12px 15px rgba(0,0,0,0.3)",
                      background: "#3CAB90",
                      width: "10rem",
                      height: "2.5rem",
                      borderRadius: "25px",
                    }}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/signUp">
                  <button
                    className="text-1xl mx-4 hover:shadow-md hover:bg-yellow-600 hover:text-white"
                    style={{
                      boxShadow: "0 12px 15px rgba(0,0,0,0.3)",
                      background: "#FFBB1C",
                      width: "10rem",
                      height: "2.5rem",
                      borderRadius: "25px",
                    }}
                  >
                    SignUp
                  </button>
                </Link>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}
