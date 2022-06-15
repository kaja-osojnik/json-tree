import React, { useEffect } from "react";
import "./App.scss";
import Main from "./components/Main";
import gsap from "gsap";

function App() {
  useEffect(() => {
    gsap
      .timeline()
      .to(".welcome", { autoAlpha: 1, duration: 1, delay: 0.2 })
      .to("h2", { y: 0, duration: 0.7 }, "-=0.6 ")
      .to(".task", { autoAlpha: 1, duration: 1 }, "-=0.3 ");
  }, []);
  return (
    <div className="flex body-flex">
      <div className="w-50">
        <div>
          <p className="v-hidden welcome">Welcome to</p>
          <div className="of-hidden">
            <h2>- JSON TREE -</h2>
          </div>

          <p className="v-hidden task">task</p>
        </div>
      </div>
      <Main />
    </div>
  );
}

export default App;
