import styled from 'styled-components';
import SideBar from './components/SideBar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Resume from './components/Resume';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import { createBrowserRouter, ScrollRestoration, Outlet, RouterProvider } from 'react-router-dom';


const RootLayout = () => (
  <Page>
    <SideBar/>
    <ScrollRestoration/>
    <Outlet/>
  </Page>
)

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {path:"", element: <Welcome />},
      {path:"about", element: <AboutMe />},
      {path:"skills", element: <WhatIDo />},
      {path:"resume", element: <Resume />},
      {path:"portfolio", element: <MyWork />},
      {path:"contact", element: <Contact />}
    ]
 }

])
function App() {

  return (
      <RouterProvider router={router}/>
  );
}

export default App

const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;  
  background-color:#111418;
`
const PageContent = styled.div`
  height: 100%;
  width: 88vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#111418;
  color: #555;
  text-align: center;
  @media (max-width:1000px) {
    min-height: 100vh;
    min-width:100vw;
    position: relative;
    top:0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px outset #141414;
    min-height: 100vh;
    min-width: 100vw;
    border:none;
    
  }
   
`

