import styled from 'styled-components';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Resume from './components/Resume';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  

  return (
    <BrowserRouter>
      <Page>
        <SideBar />
        <PageContent>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/about" element={<AboutMe />}/>
            <Route path="/skills" element={<WhatIDo />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/portfolio" element={<MyWork />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </PageContent>
    </Page>
    </BrowserRouter>
  )
}

export default App

const Page = styled.div`
  display: flex;
  flex-direction: row;  
  background-color:#111418;
`
const PageContent = styled.div`
  position: relative;
  top:0;
  left: 13vw;
  border-left: 1px outset #141414;
  min-height: 100vh;
  min-width: 84vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#111418;
  color: #555;
  text-align: center;
  padding: 0 20px;
  @media (max-width: 900px) {
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px outset #141414;
    min-height: 100vh;
    min-width: 100vw;
    
  }
   
`

