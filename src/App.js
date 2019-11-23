import React from "react";
import logo from "./logo.svg";
import BodyTest from "./BodyTest";
import Navbar from "./Navbar";
import "./App.css";
import MemeGenerator from "./MemeGenerator";

function App() {
  return (
    <div>
      <Navbar />
      <MemeGenerator />
    </div>
  );
}
// <BodyTest prop={{ob : 1}}/>
export default App;
