import styled from  "styled-components";
import { Link } from "react-router-dom";
import cvPicture from "../assets/cv_image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const SideBar = () => {

  return (
    <NavBarStyle >
      <Profile to="/about">
          <img id="cvPicture" src={cvPicture} />
          <MyName>Annylory Rosa</MyName>       
      </Profile>
      <SocialMediaLinks>
        <a href="https://github.com/AnnyloryLR"><FaGithub color={'#007BFF'} size={30}/></a>
        <a href="https://www.linkedin.com/in/annylory-lima-rosa/"><FaLinkedin color={'#007BFF'} size={30}/></a>
      </SocialMediaLinks>
      
      <Menu >
        <Link to="/">Home</Link>
        <Link to="/about" >About me</Link>
        <Link to="/skills" >What I do</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/portfolio" >My Work</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </NavBarStyle>
  );
}
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

  @media (max-width:1024px) {
    border-bottom: 1px solid aliceblue;
    border-right:none;
    height: 12vh;
    width:100%;
    position:absolute;
    left:0;
    right:0;
    display: flex;
    flex-direction: row;    
  }

`
const Profile = styled(Link)`
  width: 100%;
  height: 25%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-decoration:none;
  @media screen and (max-width:1024px) {
    height: 80%;
    width: 20%;
    margin:1%;
    padding: 2%;
  
  }

  img{
    width: 50%;
    height: 50%;
    background-color: #000000;
    border: 5px solid #343A40;
    border-radius: 50%;
    object-fit:contain;
    @media (max-width:1024px) {
      margin: 0;
    }
  }
`
const MyName = styled.p`
  margin:0;
  width: 100%;
  height: 15%;
  color: #0c71ec;
  font-size: 1rem;
  text-align:center;
  @media (max-width:1024px) {
    font-size:0.5rem;
  }
`

const SocialMediaLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{

    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width:1024){
    display:none;
  }
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
  @media (max-width: 1024px) {
    display:none;
  }
  a{
    color: aliceblue;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #0c71ec;
    }
  
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
