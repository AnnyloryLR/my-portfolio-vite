import styled from "styled-components";
import Typewriter from "typewriter-effect";
import welcomePicture from "../assets/welcomePage.png"
import HireMeButton from "./HireMeButton";
import ArrowDownDouble from "./ArrowDownDouble";
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
                <ArrowDownDouble path="/about"></ArrowDownDouble>
                
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

