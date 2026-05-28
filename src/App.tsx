import styled from 'styled-components';
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


