import styled, { keyframes } from "styled-components";
import { RiArrowDownDoubleLine} from 'react-icons/ri'
import Typewriter from "typewriter-effect";
const Welcome = () => {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior:'smooth'
        }) 
    }
    return (
        <HeroPage>                
                    <WelcomeText> Welcome! </WelcomeText>
                    <Title> 
                        <Typewriter options={
                            { strings: ['My name is Annylory.', 'You can call me Anny.', "I'm a Developer.", 'And that\'s my cat... Linus!'],
                             autoStart: true, loop: true }} /> 
                    </Title>
                    <ScrollArrow onClick={handleScrollDown}/>
        </HeroPage>
        
     )
        
            
       
}

export default Welcome;

const HeroPage = styled.div`
   
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
               url('./assets/welcomePage.png') center/cover no-repeat;
    color: aliceblue;
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
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`;

const ScrollArrow = styled(RiArrowDownDoubleLine)`
  font-size:37px;
  position:absolute;
  top: 85vh;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: ${bounce} 2s infinite;
  color:#ffffff;
  &:hover {
    border-top-color: #007bff; 
  }
`;

