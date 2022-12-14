import React from "react";

import {
  About,
  Header,
  Skills,
  Testimonial,
  Work,
  Platforms,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Platforms />
      <Work />
      <Skills />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
