import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeContent from "./components/home_content";

const App = () => (
  <div className="container">
    <Header />
    <div className="home">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
