import React from "react";
import Data from "./Data";
import "./HomeStyle.css";


const Home = () => {
  return (
    <section className="home_section" id="home">
      <div className="home_container container ">
        <div className="home_content grid">
          <Data />
          <div className="home_img">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
