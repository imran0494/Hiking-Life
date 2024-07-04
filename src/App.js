import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Class from "./components/Class";
import "./App.css";
import Promo from "./components/Promo";
import OnlineClass from "./components/OnlineClass";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/class" element={<Class />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/online-class" element={<OnlineClass/>} />   
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
  );
};

export default App;
