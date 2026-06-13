import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

const HamburgerMenu = () => {
    
    const [isSelected, setSelected] = useState(false)
    
    const showMenu = () => {
        if (isSelected == false){
          setSelected(true)
        } else{
          setSelected(false)
        }

    }
    return(
        <HamburgerMenuStyle >
            <Menu onClick={showMenu}/>
            <MenuPopUp onClick={() => setSelected(false)}>
               <HamburgerMenuItens $isSelected={isSelected}>
                <Link to="/">Home</Link>
                <Link to="/about" >About me</Link>
                <Link to="/skills" >What I do</Link>
                <Link to="/resume" >Resume</Link>
                <Link to="/portfolio" >My Work</Link>
                <Link to="/contact">Contact</Link>
       
              </HamburgerMenuItens>
            </MenuPopUp>
           
        </HamburgerMenuStyle>
    )

}

export default HamburgerMenu

const HamburgerMenuStyle = styled.div`
   display:none;
   @media (max-width:1024px) {
    height: 90%;
    position:fixed;
    top:0;
    right:0;
    display:flex;
    flex-direction:column;
    align-items:end;
    background-color: none;   
   }
 
`

const Menu = styled(IoMenuOutline)`
  font-size: 42px;
  color:aliceblue;
  margin:5%;
 
`
const MenuPopUp = styled.div`
  width: 80%;
  height: 80%;
  position: fixed;
  top:12vh;
  right:0;
  display:flex;
  justify-content: right;

 
`
const HamburgerMenuItens =  styled.div<{$isSelected: boolean}>`
  height:40%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 3%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(0,0,0);
  display: ${({$isSelected}) => $isSelected ? '' :'none'};
  a{
    text-decoration: none;
    color:aliceblue;
    font-size: 0.8rem;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #0c71ec;
    }
  
  }
`
