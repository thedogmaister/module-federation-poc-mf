import React from "react";
import ReactDOM from "react-dom";
import Footer from "component/Footer";
import Content from "MFE1/Button";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: mf_app_test_two</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
    <Content />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
