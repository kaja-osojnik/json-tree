import React, { Fragment } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <div>
        <p>Welcome to</p>
        <h1>- JSON TREE -</h1>
        <p>Please insert your JSON here or view default.</p>
      </div>
      <Main />
    </Fragment>
  );
}

export default App;
