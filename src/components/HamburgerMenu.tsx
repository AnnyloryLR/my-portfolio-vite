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
        <HamburgerMenuStyle>
            <Menu onClick={showMenu}/>
            <HamburgerMenuItens $isSelected={isSelected}>
                <Link to="/">Home</Link>
                <Link to="/about" >About me</Link>
                <Link to="/skills" >What I do</Link>
                <Link to="/resume" >Resume</Link>
                <Link to="/portfolio" >My Work</Link>
                <Link to="/contact">Contact</Link>
       
            </HamburgerMenuItens>
        </HamburgerMenuStyle>
    )

}

export default HamburgerMenu

const HamburgerMenuStyle = styled.div`
   display:none;
   @media (max-width:1024px) {
    position:fixed;
    top:0;
    right:0;
    display:flex;
    flex-direction:column;
    justify-content: left;
    align-items: end;
    height: 500px;
    width: 200px;;
    background-color: none;   
   }
 
`

const Menu = styled(IoMenuOutline)`
  font-size: 42px;
  color:aliceblue;
 
`
const HamburgerMenuItens =  styled.div<{$isSelected: boolean}>`
  height:40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 3%;
  margin-top: 5%;
  border: 1px solid black;
  background-color: rgba(0,0,0,0.5);
  display: ${({$isSelected}) => $isSelected ? '' :'none'};
  a{
    text-decoration: none;
    color:aliceblue;
  }

`
