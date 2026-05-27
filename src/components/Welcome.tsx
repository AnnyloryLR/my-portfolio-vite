import styled from "styled-components";
import Typewriter from "typewriter-effect";
const Welcome = () => {
    return (
        <WelcomeStyle>                
                    <WelcomeText> Welcome! </WelcomeText>
                    <Title> 
                        <Typewriter options={
                            { strings: ['My name is Annylory.', 'You can call me Anny.', "I'm a Developer.", 'And that is my cat: Linus!'],
                             autoStart: true, loop: true }} /> 
                        </Title>
                
                    <HireMeButton> Hire Me </HireMeButton>

        </WelcomeStyle>
     )
        
            
       
}

export default Welcome;

const WelcomeStyle = styled.div`
   
    height: 100vh;
    width: 87%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
               url('./assets/welcomePage.png') center/cover no-repeat;
    color: white;
    text-align: center;
    padding: 0 20px;
`
const Title = styled.h1`
    font-size:  clamp(1rem, 5vw, 2rem);
    font-weight: 500;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
const WelcomeText = styled.p`
    margin-bottom:100px;
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: 400;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;            
`
const HireMeButton = styled.button`
    margin-top: 70px;
    width:150px;
    height: 40px;
    background-color: none;
    border: 2px solid white;
    border-radius: 20px;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
        background-color: black;
        color:#006ff7;
        border: 2px solid #16171D;
        transition: color 0.3s ease;
    }
`