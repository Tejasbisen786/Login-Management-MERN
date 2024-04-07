import React from "react";
import SignupForm from "./components/SignupForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import AfterLogin from './components/AfterLogin'

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homelogin" element={<AfterLogin />} />

          


        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
