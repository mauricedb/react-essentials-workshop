import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Greeter } from "./components/Greeting";
import { MovieTable } from "./components/MovieTable";

function App() {
  return (
    <div className="container">
      {/* <Greeter firstName="Maurice" today={new Date()} /> */}
      <MovieTable />
    </div>
  );
}

export default App;
