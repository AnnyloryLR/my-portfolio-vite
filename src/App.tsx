import styled, { keyframes } from 'styled-components';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Resume from './components/Resume';
import MyWork from './components/MyWork';
import Contact from './components/Contact';


function App() {
  

  return (
    <>
    <NavBar />
    <Container>
      <Welcome />
      <AboutMe />
      <WhatIDo />
      <Resume />
      <MyWork />
      <Contact />
    </Container>
    </>
  )
}

export default App

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 13%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
`;
