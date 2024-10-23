import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import About from "./pages/About"
import Profile from "./pages/Profile"
// import React from 'react'
export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
    // <h1 className='text-red-600'>App</h1>
  )


}
