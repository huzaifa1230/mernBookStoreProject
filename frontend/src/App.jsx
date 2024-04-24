import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Freebook from "./Components/Freebook";
import Cards from "./Components/Cards";

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </>
    </div>
  );
};

export default App;
