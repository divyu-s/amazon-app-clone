import React from "react";
import "./Home.css";
import Product from "./Product"

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        />
      </div>
    <div className="home__row">
           <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/41Q419CMtfL._AC_UL160_.jpg" rating={5} /> 
           <Product title="Kenwood kMix 051 500-Watt Stand Mixer (Raspberry Red)" price={239} image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL._SX425_.jpg" rating={4}/>  
    </div>
    <div className="home__row">
    <Product title="Samsung SM-R370NZKAXAR Fitness Band" price={199.99} image="https://m.media-amazon.com/images/I/51VUmODNuOL._AC_UL480_FMwebp_QL65_.jpg" rating={4} /> 
    <Product title="Amazon Echo (2nd Gen),– Smart speaker with Alexa" price={98.99} image="https://m.media-amazon.com/images/I/61QoZCzMx3L._AC_UY327_FMwebp_QL65_.jpg" rating={4} /> 
    <Product title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB (2nd Generation)" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX466_.jpg" rating={5} /> 
    </div>
    <div className="home__row">
    <Product title="Samsung 32-inch (80.01cm) Flat UHD Monitor with 178 Degree Viewing Angle - LU32J590UQWXXL" price={1094.98} image="https://m.media-amazon.com/images/I/91XfEXGz9UL._AC_UY327_FMwebp_QL65_.jpg" rating={5} /> 
    </div>
    </div>

  );
};

export default Home;
