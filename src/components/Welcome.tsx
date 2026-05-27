import styled from "styled-components";
const Welcome = () => {
    return (
        <WelcomeStyle>
                <div id="welcomeText">
                    <h1 id="welcome"> Welcome! </h1>
                    <p id="welcomeText"> My name is Annylory. I am a Developer and that's my cat, Linus!</p>
                </div>
        </WelcomeStyle>
     )
        
            
       
}

export default Welcome;

const WelcomeStyle = styled.div`
   
   height: 100dvh;
   width: 85%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-image: url('./assets/welcomePage.png');
   opacity: 0.5;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
  #welcomeText{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
   }
   #welcome{
    font-size: 3rem;
    font-weight: 700;
    color: aliceblue;
   }
   #welcomeText{
    font-size: 1.5rem;
    font-weight: 500;
    color: aliceblue;
             
   }`


