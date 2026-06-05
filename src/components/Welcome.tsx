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
                <HireMeButton><Link to={"/contact"}>Hire Me</Link></HireMeButton>
                <Link to={"/about"}><ScrollArrow/></Link>
        </HeroPage>
        
     )
              
}

export default Welcome;

const HeroPage = styled.div`
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
               url(${welcomePicture}) center/cover no-repeat;
    color: aliceblue;
    text-align: center;
    padding:0 2%;
    @media (max-width: 900px) {
     position: absolute;
     top:0;
     left: 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     min-height: 100vh;
     min-width: 100vw;
    
  }
`
const WelcomeText = styled.h1`
    font-size:  clamp(1rem, 5vw, 3rem);
    font-weight: 500;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
const Title = styled.p`
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: 400;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;            
`
const HireMeButton = styled.button`
    position:absolute;
    top: 75vh;
    left: 39vw;
    width:8%;
    height: 4%;
    background-color:rgba(0, 0, 0, 0.3);
    border: 2px solid #006ff7;
    border-radius: 20px;
    cursor: pointer;
    a{
        text-decoration:none;
        color:#006ff7;
    }   
       
`
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`

const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  position:absolute;
  top: 85vh;
  left: 41.5vw;
  transform: translateX(-50%);
  cursor: pointer;
  animation: ${bounce} 2s infinite;
  color:#ffffff;
  &:hover {
    border-top-color: #007bff; 
  }
`

