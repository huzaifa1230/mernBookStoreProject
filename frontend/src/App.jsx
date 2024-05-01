import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import ContactUs from "./Contact/ContactUs";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <>
        <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Toaster />
        </div>
      </>
    </div>
  );
};

export default App;
