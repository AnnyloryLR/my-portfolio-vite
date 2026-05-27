import styled from 'styled-components/dist/constructors/styled';
import './index.css';

const NavBar = () => {
  return (
    <NavBarStyle>
      <div id="profile">
        <img id="cvPicture" src="./assets/cv_image.png" alt="cvPicture" />
        <h1 id="myName">Annylory Rosa</h1>

      </div>
      
      <div className="menu">
        <a href="#about" className="hover:text-blue-500 transition-colors">About me</a>
        <a href="#skills" className="hover:text-blue-500 transition-colors">What I do</a>
        <a href="#resume" className="hover:text-blue-500 transition-colors">Resume</a>
        <a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </div>
    </NavBarStyle>
  );
};

export default NavBar;

const NavBarStyle = styled.nav`
   background-color: #343A40;
   height: 100vh;
   width:15%;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-right: 1px solid black;
   #profile{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   #myName{
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color:aliceblue;
   }
   #cvPicture{
    object-fit: contain;
    background-color: #d5d2c9;
    border: 3px solid #343A40;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
   }
   a{
        text-decoration: none;
        color: aliceblue;/* #3a6abd*/;
        font-size: 1.0rem;          
    } 
   .menu{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 5rem;
  }
`;