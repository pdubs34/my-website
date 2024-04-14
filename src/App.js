
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Birthday from './pages/Birthday';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Nav />}> */}
      <Route path="/">
        <Route index element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="skills" element={<Skills />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="birthday" element={<Birthday/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
