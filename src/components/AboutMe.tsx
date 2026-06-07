import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri' 

const AboutMe = () => {
    
        return (
        <AboutMeContainer id="about">
            <Title> About Me</Title>
            <Paragraph>
                <Subtitle>I'm</Subtitle> <MyName>Annylory Rosa,</MyName> <Subtitle>a Web Developer</Subtitle>
            </Paragraph>
            
            <Paragraph> 
                I have a PhD in Pharmacy, which is rather unconventional, don't you think? I started learning 
                programming during my Doctorate. I still like chemistry very much, but I love coding even more!
                I work with programming languages and frameworks for Web Development such as JavaScript, 
                React, Node.js, Java and Spring Boot. I've implemented more than 20 systems, so far...
                Checkout <Link to={"/portfolio"}>My Work</Link> section to see my projects!
            </Paragraph>

            <HireMeButton to={"/contact"}>Hire Me</HireMeButton>
            <LinkStyled to={"/skills"}><ScrollArrow/></LinkStyled>
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
    border-bottom:2%;
    font-size: clamp(1rem, 5vw, 4rem);
    
`
const Subtitle = styled.p`
    display:inline;
    font-size: clamp(1rem, 5vw, 1.8rem);  
`
const MyName = styled.p`
    display:inline;
    color:#007bff;
    font-size: clamp(1rem, 5vw, 1.8rem);  
`
const Paragraph = styled.p`
    width:70%;
    max-height:65%;
    overflow-y:auto;
    font-size: clamp(1rem, 5vw, 1rem);
    line-height: 2;
    text-align: justify;
    color: #555;
    a {
        color: #007bff;
        text-decoration: none;
    }
`
const HireMeButton = styled(Link)`
    position:absolute;
    top: 90vh;
    width:100px;
    height:30px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.3);
    border: 2px solid #006ff7;
    border-radius: 20px;
    text-decoration:none;
    color:#006ff7;
    font-size:1rem;       
`
const LinkStyled = styled(Link)`
  position:absolute;
  top: 95vh;
  width:8%;
  height: 4%;
  display:flex;
  align-items:center;
  justify-content:center;

`
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`

const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  color:#ffffff;
`
