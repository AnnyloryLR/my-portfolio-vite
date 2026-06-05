import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri' 

const AboutMe = () => {
    
        return (
        <AboutMeContainer id="about">
            <Title> About Me</Title>
            <Subtitle>I'm <h3 style={{fontSize:'1.8rem', color:' #007bff', margin:"10px"}}> Annylory Rosa </h3> , a Web Developer </Subtitle>
            <Paragraph> 
                I have a PhD in Pharmacy, which is rather unconventional, don't you think? I started learning 
                programming during my Doctorate. I still like chemistry very much, but I love coding even more!
            <Paragraph>
                I work with programming languages and frameworks for Web Development such as JavaScript, 
                React, Node.js, Java and Spring Boot. I've implemented more than 20 systems, so far...
            </Paragraph> 
                Checkout <Link to={"/portfolio"}>My Work</Link> section to see my projects!</Paragraph>
            <HireMeButton><Link to={"/contact"}>Hire Me</Link></HireMeButton>
             <Link to={"/skills"}><ScrollArrow/></Link>
        </AboutMeContainer>
     )
}

export default AboutMe;

const AboutMeContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Title = styled.h1`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 4rem);
    
`
const Subtitle = styled.h3`
    min-width:850px;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: clamp(1rem, 5vw, 1.8rem);  
`
const Paragraph = styled.p`
    margin-bottom:30px;
    max-width:850px;
    font-size: clamp(1rem, 5vw, 1.2rem);
    line-height: 2;
    text-align: justify;
    color: #555;
    a {
        color: #007bff;
        text-decoration: none;
    }
`
const HireMeButton = styled.button`
    position:absolute;
    top: 83vh;
    left: 40vw;
    width:150px;
    height: 40px;
    background-color: #555;
    border: 2px solid aliceblue;
    border-radius: 20px;
    cursor: pointer;
    a{
        color:aliceblue;
        font-size: 0.8rem;
        text-decoration:none;
  
    }
    &:hover {
        a{
            color:#006ff7;
        }
        
        background-color:#111418;
        border: 2px solid #006ff7;
        transition: color 0.3s ease;
    }
`
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`;
const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  position:absolute;
  top: 90vh;
  left: 43vw;
  transform: translateX(-50%);
  cursor: pointer;
  animation: ${bounce} 2s infinite;
  color:#ffffff;
  &:hover {
    border-top-color: #007bff; 
  }
`;
