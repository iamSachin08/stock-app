import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/body/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Competitions from "./components/body/Competition";
import MyStocks from "./components/body/MyStocks";
import Followers from "./components/body/Followers";
import Stats from "./components/body/Stats";
// className="flex justify-center bg-gray-600"
function App() {
  return (
    <div >
      <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/mystocks" element={<MyStocks />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/stats" element={<Stats />} />
         
        </Routes>
        <Footer />
        </Router>
        
      </div>
    </div>
  );
}

export default App;
