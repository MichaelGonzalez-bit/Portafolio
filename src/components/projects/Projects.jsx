import React from "react";
import primer from "../../assets/img/project-img1.png";
import second from "../../assets/img/project-img2.png";
import three from "../../assets/img/project-img3.png";
import four from "../../assets/img/project-img4.png";
import five from "../../assets/img/project-img5.png";
import six from "../../assets/img/project-img6.png";
import "./ProjectsStyle.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-bx wow zoomIn">
        <h2>Projects</h2>
        <p>
          With my experience acquired through time I have realized several
          projects of different nature as they are{" "}
        </p>

    <div className="fold">  
    <div className="card">
      <div className="face face1">
        <div className="content">
           <i className="fab fa-windows"></i>            
          <img src={primer} alt="" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p className="parrafo"> E-ccomerce website for High Tide clothing company </p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>

   <div className="card">
      <div className="face face1">
        <div className="content">
           <i className="fab fa-windows"></i>            
          <img src={second} alt="" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p className="parrafo"> Petshop website for the company AnimalExpress</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>

   <div className="card">
      <div className="face face1">
        <div className="content">
           <i className="fab fa-windows"></i>            
          <img src={three} alt="" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p className="parrafo">Real Estate Real Roots Website</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>

   <div className="card">
      <div className="face face1">
        <div className="content">
           <i className="fab fa-windows"></i>            
          <img src={four} alt="" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p className="parrafo"> Game Checkers Python</p>
          <a href="https://github.com/MichaelGonzalez-bit/Damas-Min-Max" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>
   
   <div className="card">
      <div className="face face1">
      <div className="content">
           <i className="fab fa-windows"></i>            
          <img src={five} alt="" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
        <p className="parrafo">Generative Agents AI</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button">GIT HUB</a>
        </div>
      </div>
   </div>
   
   
   <div className="card">
      <div className="face face1">
      <div className="content">
           <i className="fab fa-windows"></i>            
          <img src={six} alt="" />
        </div>
      </div>
      <div className="face face2">
        <div className="content">
        <p className="parrafo"> Library JavaScript</p>
          <a href="https://github.com/MichaelGonzalez-bit?tab=repositories" target="_blank" rel="noreferrer"  type="button" >GIT HUB</a>
        </div>
      </div>
   </div>
   </div>  
   </div>
   </div>
  );
};

export default Projects;
