import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri'
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import welcomePicture from "../assets/welcomePage.png"
const Welcome = () => {

    return (
        <HeroPage>                
            <Title> Welcome! </Title>
                <WelcomeText> 
                    <Typewriter options={
                        { strings: ['My name is Annylory.', 'You can call me Anny.', "I'm a Developer.", 'And that\'s my cat... Linus!'],
                        autoStart: true, loop: true }} /> 
                </WelcomeText>
                <HireMeButton to={"/contact"}>Hire Me</HireMeButton>
                <LinkStyled to={"/about"}><ScrollArrow/></LinkStyled>
        </HeroPage>
        
     )
              
}

export default Welcome;

const HeroPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${welcomePicture});
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    color: aliceblue;
    text-align: center;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        text-align: center;
        min-height: 100vh;
        min-width: 100vw;
    
  }
`
const WelcomeText = styled.h1`
    padding:2%;
    font-size:  clamp(1rem, 5vw, 3rem);
    font-weight: 500;
`
const Title = styled.p`
    padding:2%;
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: 400;       
`
const HireMeButton = styled(Link)`
    position:absolute;
    top: 75vh;
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
  top: 85vh;
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

