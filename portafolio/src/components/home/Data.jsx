import { useState, useEffect } from "react";
import React from "react";
import "./HomeStyle.css";

function Data() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FullStack Developer", "React Developer" , "Python Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  
  return (
    <div className="home_data">
      <h1 className="home_title">Hi I'm Michael</h1>
      <div className="espacioletras"><h1 >💾<span>{text}</span></h1></div>
      <div className="description">
        <p className="home_description">
          Systems and computer engineer with more than 2 years of experience in application development using SCRUM agile methodology. 
          My main goal has been full-stack development, working with languages such as Python, Java, JavaScript, CSS and HTML. 
          I have a deep understanding of the development of modern and efficient user interfaces using React Js.
        </p>

        <a type='button' href="https://drive.google.com/file/d/1i9Qkfe8mjHa3AK_pzxW7-TPxjr-TElXu/view?usp=sharing" target="_blank" rel="noreferrer" className="button button--flex">DOWNLOAD CV</a>
      </div>
    </div>
  );
}

export default Data;

