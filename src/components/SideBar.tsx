import styled from  "styled-components";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <NavBarStyle>
      <Profile>
        <img id="cvPicture" src="dist/assets/images/cv_image.png" />
        <Link to="/about" >Annylory Rosa</Link>
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #111418;
  width:13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Profile = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a{
    color: #0c71ec;
    font-size: 1.1rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  img{
    background-color: #d5d2c9;
    border: 3px solid #343A40;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: contain;
  }
`

const Menu = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 1rem;
  margin-top: 5rem;
  a{
    color: aliceblue;
    font-size: 1.1rem;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #0c71ec;
    }
  }
`