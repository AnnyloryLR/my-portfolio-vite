import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import welcomePicture from "../assets/welcomePage.png"
import HireMeButton from "./HireMeButton";
import ArrowDownDouble from "./ArrowDownDouble";
import ArrowMobileRight from "./ArrowMobileRight";
const Welcome = () => {

    return (
        <HeroPage>                
            <Title> Welcome! </Title>
                <WelcomeText> 
                    <Typewriter options={
                        { strings: ['My name is Annylory.', 'You can call me Anny.', "I'm a Developer.", 'And that\'s my cat... Linus!'],
                        autoStart: true, loop: true }} /> 
                </WelcomeText>
                <HireMeButton/>
                <HireMeButtonStyle to={"/contact"} >Hire Me</HireMeButtonStyle>
                <ArrowDownDouble path="/about"></ArrowDownDouble>
                <ArrowMobileRight path="/about"></ArrowMobileRight>
                
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
    @media screen and (max-width:1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:flex-start;
        text-align: center;
        min-height: 87vh;
        min-width: 100%;
    
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

const HireMeButtonStyle = styled(Link)`
    @media screen and (min-width: 1010px){
        display:none;
    }

    @media screen and (max-width:1000px){
        position:fixed;
        top: 35vh;
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
    }      
`
