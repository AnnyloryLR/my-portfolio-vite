import styled from "styled-components";
import { Link } from "react-router-dom";
import HireMeButton from "./HireMeButton";
import ArrowDownDouble from "./ArrowDownDouble";

const AboutMe = () => {
    
        return (
        <AboutMeContainer id="about">
            <Title> About Me</Title>
            <Presentation>
                <Subtitle>I'm</Subtitle> <MyName>Annylory Rosa,</MyName> <Subtitle>a Web Developer</Subtitle>
            </Presentation>
            
            <Paragraph> 
                I have a PhD in Pharmacy, which is rather unconventional, don't you think? I started learning 
                programming during my Doctorate.
            </Paragraph>
            <Paragraph> 
                I still like chemistry very much, but I love coding even more!
                I work with programming languages and frameworks for Web Development such as
                JavaScript, React, Node.js, Java and Spring Boot.
            </Paragraph> 
            <Paragraph> 
                I've implemented more than 20 systems, so far... Checkout
                <Link to={"/portfolio"} style={{display:'contents'}}> MyWork </Link>section to see my projects!
            </Paragraph>
            <HireMeButton/>
            <ArrowDownDouble path="/skills"/>
        </AboutMeContainer>
     )
}

export default AboutMe;

const AboutMeContainer = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Title = styled.h1`
    padding:3%;
    font-size: 4rem;
    @media (max-width:900px) {
        font-size:2rem;
    }
    
`
const Presentation = styled.div`
    width: 60%;
    text-align:left;
    @media (max-width:900px) {
        width: 80%;
        font-size:1rem;
    }
`
const Subtitle = styled.p`
    display:inline;
    font-size: clamp(1rem, 5vw, 1.8rem);  
    @media (max-width:900px) {
        font-size:1rem;
    }
`
const MyName = styled.p`
    display:inline;
    color:#007bff;
    font-size: clamp(1rem, 5vw, 1.8rem);  
    @media (max-width:900px) {
        font-size:1rem;
    }
`
const Paragraph = styled.p`
    width:60%;
    font-size: clamp(1rem, 5vw, 1.2rem);
    line-height: 2;
    text-align: justify;
    color: #555;
    a {
        color: #007bff;
        text-decoration: none;
    }
    @media (max-width:900px) {
        line-height: 1;
        font-size:1.2rem;
        text-align:center;
    }
    @media (max-width:700px) {
        width:80%;
        line-height: normal;
        font-size:0.8rem;
        text-align:justify;
    }
`

