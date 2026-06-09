import styled from  "styled-components";
import { Link } from "react-router-dom";
import cvPicture from "../assets/cv_image.png";

const SideBar = () => {
  return (
    <NavBarStyle>
      <Profile>
        <img id="cvPicture" src={cvPicture} />
        <MyName to="/about" >Annylory Rosa</MyName>
      </Profile>

      <Menu>
        <Link to="/">Home</Link>
        <Link to="/about" >About me</Link>
        <Link to="/skills" >What I do</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/portfolio" >My Work</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </NavBarStyle>
  );
};

export default SideBar;

const NavBarStyle = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  border-right: 1px inset #141414;
  width:12vw;
  height: 100vh;
  background-color: #111418;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1600px) {
      width:10vw;

    
  } 
  @media (max-width: 1000px) {
      position: relative;
      display: none;

    
  }

`
const Profile = styled.div`
  width: 100%;
  height: 25%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  img{
    width: 50%;
    height: 50%;
    background-color: #000000;
    border: 5px solid #343A40;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit:contain;
  }
`
const MyName = styled(Link)`
  width: 100%;
  height: 50%;
  color: #0c71ec;
  font-size: 100%;
  text-decoration: none;
  text-align:center;
`

const Menu = styled.div`
  height:40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 3%;
  margin-top: 5%;
  a{
    color: aliceblue;
    font-size: 100%;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #0c71ec;
    }
  }
`
