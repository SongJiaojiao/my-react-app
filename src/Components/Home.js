import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import '../index.css'


const Home = () => {
    return (
      <main className="w-full bg-espresso-50 px-8 sm:px-8 md:px-16 lg:px-16 xl:px-56 2xl:px-72 py-8">
        <Navbar/>
        <About/>
        <Projects/>
        <Footer />
      </main>
  
    );
  }

  export default Home;
  