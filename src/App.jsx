import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/body/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Competitions from "./components/body/Competition";
import MyStocks from "./components/body/MyStocks";

function App() {
  return (
    <div className="flex justify-center bg-gray-600">
      <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/mystocks" element={<MyStocks />} />
         
        </Routes>
        <Footer />
        </Router>
        
      </div>
    </div>
  );
}

export default App;
