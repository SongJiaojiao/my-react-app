import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import '../index.css'


const Home = () => {
    return (
      <main className="container">
        <Navbar/>
        <About/>
        <Projects/>
        <Footer />
      </main>
  
    );
  }

  export default Home;
  