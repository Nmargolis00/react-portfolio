import React from "react";
import "./aboutMe.css";
import FamPic from "./images/Family Photo.jpg";
import { Container, Col, Row, Image } from "react-bootstrap";
import {  Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Container className="about">
        <Row>
          <Col className="photo">
            <Image
              src={FamPic}
              alt="Family holding a tree"
              thumbnail
            />
          </Col>
          <Col className="about-text">
            <Typography>
              <h1>About Me</h1>
              <p className="about-para">
             TEST My name is Nate Margolis and I am a Full Stack Developer. I have an undergraduate degree in Chemistry and a Master's in Material Science Engineering. I have written multiple scientific papers, conducted processing design of experiments to optimize material performance and most recently helped to implement a regrind initiative to drastically reduce virgin plastic consumption. 
              </p>
              <br></br>
              <p className="about-para">
               I am a self-starter and a quick learner. Problem-solving, trouble shooting and optimization are my bread and butter. I am looking for a position where I can utilize my skills to help a company grow and succeed. I enjoy explaining complex concepts in a way that is easy to understand to collaborate with sales and marketing.
              </p>
            </Typography>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;


// function AboutMe() {
//     return (
//         <div className="about-container">
//             <image className="photo" src={FamPic} alt="Family Photo" />
//             <div className="bio">
//                 <p className="bioText">
//                     My name is Nate Margolis and I am a Full Stack Developer.. I have an undergraduate degree in Chemistry and a Master's in Material Science Engineering. I have written multiple scientific papers, conducted processing design of experiments to optimize material performance and most recently helped to implement a regrind initiative to drastically reduce virgin plastic consumption. Problem-solving, trouble shooting and optimization are my bread and butter. I am a self-starter and a quick learner. I am looking for a position where I can utilize my skills to help a company grow and succeed. I enjoy explaining complex concepts in a way that is easy to understand to collaborate with sales and marketing.
//                 </p>
//                 </div>
//             </div>
//     )
// }


// export default AboutMe;