import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Greeter } from "./components/Greeting";

function App() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(0, 0, 255, 0.05)" }}
    >
      <Greeter firstName="Maurice" today={new Date()} />
    </div>
  );
}

export default App;
