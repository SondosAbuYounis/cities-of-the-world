import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Example from './Components/Navbar';
import { NavBarOne } from './Components/NavBarOne';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export denpm run startfault App;

export default function App() {
  return (
    <div>
    {/*Nab Bar */}
    <NavBarOne/>
    </div>
  )
}


