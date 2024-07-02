// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Card from "./components/card";

// function App() {
//   const [color, setColor] = useState('black');
//   console.log(color);
//   return (
//     <div
//       className="w-full h-full duration-200"
//       style={{ backgroundColor: color }} // Fix: Directly set the backgroundColor
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-100 px-2 py-2 rounded-xl ">
//           <button
//             className="outline-none px-4 py-1 rounded-full shadow-lg"
//             style={{ backgroundColor: "red" }}
//             onClick={() => setColor('red')}
//           >
//             Red
//           </button>
//           <button
//             className="outline-none px-4 py-1 rounded-full shadow-lg"
//             style={{ backgroundColor: "green" }}
//             onClick={() => setColor('green')}
//           >
//             Green
//           </button>
//           <button
//             className="outline-none px-4 py-1 rounded-full shadow-lg"
//             style={{ backgroundColor: "blue" }}
//             onClick={() => setColor('blue')}
//           >
//             Blue
//           </button>
//           <button
//             className="outline-none px-4 py-1 rounded-full shadow-lg"
//             style={{ backgroundColor: "purple" }}
//             onClick={() => setColor('purple')}
//           >
//             Purple
//           </button>
//           <button
//             className="outline-none px-4 py-1 rounded-full shadow-lg"
//             style={{ backgroundColor: "yellow" }}
//             onClick={() => setColor('yellow')}
//           >
//             Yellow
//           </button>
//           <button
//             className="outline-none px-4 py-1 rounded-full shadow-lg"
//             style={{ backgroundColor: "orange" }}
//             onClick={() => setColor('orange')}
//           >
//             Orange
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css"; // Ensure the CSS file path is correct

function App() {
  const [color, setColor] = useState('black');
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}> {/* Ensure h-screen is used for full height */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-100 px-2 py-2 rounded-xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor('purple')}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor('orange')}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
