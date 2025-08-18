import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import '../index.css'


const Home = () => {
    return (
      <main className="w-full bg-espresso-50 px-8 sm:px-8 md:px-24 lg:px-24 xl:px-96 2xl:px-96 py-8">
        <Navbar/>
        <About/>
        <Projects/>
        <Footer />
      </main>
  
    );
  }

  export default Home;
  