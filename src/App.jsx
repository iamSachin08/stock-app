import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/body/Home";

function App() {
  return (
    <div className="flex justify-center bg-gray-600">
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
