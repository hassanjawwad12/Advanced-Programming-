import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


/*function Headerr() {
  return (
    <>
      <h1>This is it</h1>   
    </>
  );
}


function Element() {
  return (
    <>
      <Headerr />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
*/


ReactDOM.createRoot(document.getElementById("root")). render(<App />);

//ReactDOM.createRoot(document.getElementById("root")).render(element);
//document.getElementById("root").append(JSON.stringify(element));
//this is when element is not a function 

//append doesnot understand real DOM
