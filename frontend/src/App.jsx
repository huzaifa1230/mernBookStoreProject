import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <div>
      <>
        <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </>
    </div>
  );
};

export default App;
