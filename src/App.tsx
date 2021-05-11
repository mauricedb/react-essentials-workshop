import React from "react";
import "./App.css";
import { Greeter } from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Greeter firstName="Maurice" today={new Date()} />
    </div>
  );
}

export default App;
