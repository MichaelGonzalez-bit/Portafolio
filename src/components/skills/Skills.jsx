import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SkillsStyle.css";

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import meter5 from "../../assets/img/meter5.svg";
import meter6 from "../../assets/img/meter6.svg";
import meter7 from "../../assets/img/meter7.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillsData = [
    { image: meter1, name: "Python" },
    { image: meter2, name: "ReactJs" },
    { image: meter3, name: "Javascript" },
    { image: meter5, name: "Html" },
    { image: meter6, name: "Css" },
    { image: meter7, name: "Java" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Systems and computer engineer from Universidad Pedagogica Y
                tecnologica de Colombia
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.image} alt="Image" />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
