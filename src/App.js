import React from "react";
import "./App.scss";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex body-flex">
      <Main />
      <div className="w-50">
        <div>
          <p>Welcome to</p>
          <h1>- JSON TREE -</h1>
          <p>task</p>
        </div>
      </div>
    </div>
  );
}

export default App;
