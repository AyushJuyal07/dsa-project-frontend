import React from "react";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/home/Home";
import OnCampus from "./components/OnCampus/OnCampus";
import OffCampus from "./components/OffCampus/OffCampus";
import Resources from "./components/Resources/Resources";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/oncampus" Component={OnCampus} />
          <Route path="/offcampus" Component={OffCampus} />
          <Route path="/resources" Component={Resources} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
