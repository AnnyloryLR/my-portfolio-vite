import styled from 'styled-components';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Resume from './components/Resume';
import MyWork from './components/MyWork';
import Contact from './components/Contact';



function App() {
  

  return (
    <Page>
    <SideBar />
    <PageContent>
      <Welcome />
      <AboutMe />
      <WhatIDo />
      <Resume />
      <MyWork />
      <Contact />
    </PageContent>
    </Page>
  )
}

export default App

const Page = styled.div`
  display: flex;
  flex-direction: row;  
  background-color:#111418;
`
const PageContent = styled.div`
  border: 1px solid red;
  position: relative;
  top:0;
  left: 13vw;
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
   
`

