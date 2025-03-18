import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Trending from "./Trend";
import Feature from "./Featured";
import Footer from "./Footer";


const Home = () => {
    return (
      <div>
       <Navbar />
       <Hero />
       <Trending />
       <Feature />
       <Footer />
      </div>
    )
  }
  
  export default Home;