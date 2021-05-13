import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Greeter } from "./components/Greeting";
import { MovieTable } from "./components/MovieTable";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SingleMovie } from "./components/SingleMovie";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/greetings">
            <Greeter firstName="Maurice" today={new Date()} />
          </Route>
          <Route path="/movie/:id">
            <SingleMovie />
          </Route>
          <Route path="/movies">
            <MovieTable />
          </Route>
          <Route>
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
